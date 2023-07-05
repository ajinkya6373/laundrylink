import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserAuth, useUserData } from "../context";
import { BASE_URL } from "../utils/utils";

export const useUserActions = () => {
  const { userDispatch } = useUserData();
  const {
    userProfile,
    isUserLoggedIn,
    setToastMsg,
    setToastType,
    setLoading,
  } = useUserAuth();
  const navigate = useNavigate();
  const addToCartOnClick = async (cartItem, lspId, path, shopName, setCategoryModal) => {
    if (isUserLoggedIn && userProfile?._id) {
      try {
        setToastType("add");
        setToastMsg("Adding...");
        setLoading(true);
        const { data:{success,savedItem,message} } = await axios.post(`${BASE_URL}/cart/${userProfile._id}`, {
          cartItem,
          lspId,
          lspName: shopName,
        });
        if (success) {
          setToastMsg("Added to cart");
          userDispatch({
            type: "ADD_TO_CART",
            payload: {
              savedItem: savedItem,
            },
          });
        }else{
          setToastMsg(message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setCategoryModal(false)
      }
      return;
    }
    navigate.push("/signin", {
      state: {
        from: path,
        message: "Login to add to cart.",
        addTo: "CART",
      },
    });
  };



  const removeFromCartOnClick = async (_id) => {
    try {
      if (isUserLoggedIn && userProfile?._id) {
        setLoading(true)
        setToastType("remove");
        setToastMsg("Removing..");
        const response = await axios.delete(
          `${BASE_URL}/cart/${userProfile._id}/${_id}`
        );

        if (response.data.success) {
          setToastMsg("Removed");
          userDispatch({
            type: "REMOVE_FROM_CART",
            payload: {
              _id,
            },
          });
        }
      }
    } catch (error) {
      console.error("Error while removing from cart:", error);
      setToastType("error");
      setToastMsg("An error occurred while removing from cart. Please try again.");
    }
    finally {
      setLoading(false)
    }
  };


  const incrementQuantity = async (_id, quantity, setDisabled) => {
    try {
      if (isUserLoggedIn && userProfile?._id) {
        setDisabled(true);
        setToastType("update");
        setToastMsg("Updating...");
        setLoading(true)
        const response = await axios.post(
          `${BASE_URL}/cart/${userProfile._id}/${_id}`,
          {
            quantity: quantity + 1,
          }
        );

        if (response.data.success) {
          setToastMsg("Quantity updated");
          userDispatch({
            type: "INCREMENT_CART",
            payload: {
              _id,
            },
          });
        }
        setDisabled(false);
      }
    } catch (error) {
      console.error("Error while updating quantity:", error);
      setToastType("error");
      setToastMsg("An error occurred. Please try again.");

    }
    finally {
      setDisabled(false);
      setLoading(false)
    }
  };

  const decrementQuantity = async (_id, quantity, setDisabled) => {
    try {
      if (isUserLoggedIn && userProfile?._id) {
        setDisabled(true);
        setLoading(true)
        setToastType("update");
        setToastMsg("Updating...");
        const { data } = await axios.post(
          `${BASE_URL}/cart/${userProfile._id}/${_id}`,
          {
            quantity: quantity - 1,
          }
        );

        if (data.success) {
          setToastMsg("Quantity updated");
          userDispatch({
            type: "DECREMENT_CART",
            payload: {
              _id,
            },
          });
        }
        setDisabled(false);
      }
    } catch (error) {
      console.error("Error while updating quantity:", error);
      setToastType("error");
      setToastMsg("An error occurred. Please try again.");
      setDisabled(false);
    } finally {
      setDisabled(false);
      setLoading(false)
    }
  };


  const placeOrderOnClick = async (orderItems) => {
    try {
      if (isUserLoggedIn && userProfile?._id) {
        setLoading(true);
        const { data:{success,savedItem} } = await axios.post(`${BASE_URL}/order/${userProfile?._id}`, {
          orderItems
        })
        if (success) {
          userDispatch({
            type: "ADD_TO_ORDER",
            payload: {
              savedItem
            }
          })
          setToastType("success");
          setToastMsg("Order placed successfully!");
          return savedItem._id
        }
      }
    } catch (error) {
      console.error("Error while placing:", error);
      setToastType("error");
      setToastMsg("An error occurred. Please try again.",error);
    } finally {
      setLoading(false)
    }
  }


  const addReviewOnClick = async(lspId,rating,comment,setReviewModalOpen)=> {
    try {
      setToastType("add");
      setToastMsg("Adding...");
      setLoading(true);
      const {data:{success}} = await axios.post(`${BASE_URL}/review/${lspId}`,{
        userId:userProfile._id,
        username:userProfile.username,
        comment,
        rating
      })
      if(success){
        setToastMsg("Added review");
      }
    } catch (error) {
      console.log(error);
      setToastType("error");
      setToastMsg("An error occurred. Please try again.");
    }
    finally {
      setReviewModalOpen(false);
      setLoading(false);
    }

  }

  const addAddress =async(values)=>{
    try {
        setToastType("update");
        setToastMsg("Updating...");
        
        setLoading(true);
        const {data:{success,address}} = await axios.post(`${BASE_URL}/address/${userProfile._id}`,{
            newAddress:{...values}
        })
        if(success){
            setToastMsg("Address Added Successfully");
            userDispatch({
                type: "ADD_ADDRESS",
                payload: {
                    newAddress:address
                }
            });
            return success;
        }
    } catch (error) {
        console.log(error);
        setToastType("error");
        setToastMsg(error.message);
    }finally{
        setLoading(false);
    }
}

const updateAddress = async (id, data) => {
  if (isUserLoggedIn && userProfile?._id) {
      setToastType("update");
      setToastMsg("Updating...");
      setLoading(true);
      try {
          const res = await axios.put(
              `${BASE_URL}/address/${userProfile._id}/${id}`,
              { updatedAddress: data }
          );
          if (res.data.success) {
              setToastMsg("Address updated!");
              userDispatch({
                  type: "UPDATE_ADDRESS",
                  payload: {
                      _id: id,
                      ...data,
                  },
              });
              if (
                  JSON.parse(localStorage.getItem("currentAddress"))._id ===
                  id
              ) {
                  localStorage.setItem(
                      "currentAddress",
                      JSON.stringify({ _id: id, ...data })
                  );
              }
              return res.data.success;
          }
      } catch (err) {
          console.log(err);
      } finally {
          setLoading(false);
      }
  } else {
      alert("You need to login");
  }
};


const deleteAddress =async(addressId)=>{
    try {
        setToastType("remove");
        setToastMsg("Deleting..");
        const {data} = await axios.delete(`${BASE_URL}/address/${userProfile._id}/${addressId}`)
        if(data.success){
            const selectedAddress = JSON.parse(localStorage.getItem("currentAddress"));
            if (addressId === selectedAddress._id) {
              localStorage.removeItem("currentAddress");
            }
            setToastMsg("Address deleted successfully");
            userDispatch({
                type: "DELETE_ADDRESS",
                payload: {
                    addressId,
                }
            });
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
}

  return {

    addToCartOnClick,
    removeFromCartOnClick,
    incrementQuantity,
    decrementQuantity,
    addAddress,
    updateAddress,
    deleteAddress,
    placeOrderOnClick,
    addReviewOnClick
  }
}