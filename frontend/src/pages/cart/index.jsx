import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Navbar, Toast } from "../../components";
import { useUserAuth, useUserData } from "../../context";
import { BASE_URL, TotalPrice, calculateItemPrice, normalizeName } from "../../utils/utils";
import { useUserActions } from "../../hooks/useUserAction";
import { useNavigate } from "react-router-dom";

import {
  AddressBox,
  AddressInfo,
  AddressItem,
  Button,
  CartLeft,
  CartRight,
  CartWrapper,
  LaundryName,
  PBoxRight,
  PlaceButton,
  ProductBox,
  Row,
  UpdateQty,
} from "./cart";

export default function CartPage() {
  const { userProfile } = useUserAuth();
  const [isDisabled, setDisabled] = useState(false);
  const [openAddModal, setAddModal] = useState(false);
  const [lspName, setLspName] = useState("");
  const [lspId, setLspId] = useState("");
  const [orderId,setOrderId] = useState("")
  const [selectedAddress, setAddress] = useState(
    JSON.parse(localStorage.getItem("currentAddress")) 
  );
  const {
    incrementQuantity,
    decrementQuantity,
    removeFromCartOnClick,
    placeOrderOnClick,
  } = useUserActions();
  const navigate = useNavigate();
  const {
    userData: { cartList, addressList },
  } = useUserData();
  useEffect(() => {
    try {
      if (cartList.length > 0) {
        (async () => {
          const {
            data: {
              cartlist: { lspName, lspId },
            },
          } = await axios.get(`${BASE_URL}/cart/${userProfile._id}`);
          setLspName(lspName);
          setLspId(lspId);
        })();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const placeOrder = async() => {
    if (selectedAddress) {
      const orderItems = {
        lspId,
        lspName,
        items: [...cartList],
        deliveryAddress: selectedAddress,
      };
      const id = await placeOrderOnClick(orderItems)
      setOrderId(id) 
    }else{
      alert("please select address")
    }
  };

  const onChange = (address) => {
    if (selectedAddress?._id !== address?._id || selectedAddress === null) {
      setAddress(address);
      localStorage.setItem("currentAddress", JSON.stringify(address));
      setAddModal(false);
    }
  };

  return (
    <>
      <Navbar />
      <Toast/>
      <CartWrapper>
        {cartList.length <= 0 ? (
          <CartRight>
            <h4 style={{ marginBottom: "1rem" }}>
              Oopsie! 🧺 Our washing machine feels lonely. Time to dress it up!
              👕👖 Add clothes and make it happy!
            </h4>
            {orderId ? <Button onClick={() => navigate(`/orderDetails/${orderId}`)} action="true">
              order Detail
            </Button> :
            <Button onClick={() => navigate(`/`)} >Home</Button>
            }

          </CartRight>
        ) : (
          <>
            <CartLeft>
              <LaundryName>{lspName}</LaundryName>
              <AddressBox>
                {selectedAddress ? (
                  <div style={{ marginRight: "5rem" }}>
                    Deliver to:
                    <span>
                      {selectedAddress.name},{selectedAddress.pinCode}
                    </span>
                    <p>{selectedAddress.address}</p>
                    <p>Mobile : {selectedAddress.mobileNo}</p>
                  </div>
                ) : (
                  <h4>please select the address</h4>
                )}
                <Button action="true" onClick={() => setAddModal(true)}>
                  CHANGE ADDRESS
                </Button>
              </AddressBox>
              {cartList.map(({ itemName, quantity, _id, services }) => {
                return (
                  <ProductBox key={_id}>
                    <img
                      src={`/assets/catalouge/${normalizeName(itemName)}.svg`}
                      alt={itemName}
                    />
                    <PBoxRight>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {itemName}
                        <div
                          style={{
                            display: "flex",
                            gap: "9px",
                          }}
                        >
                          {services.map((service) => {
                            return (
                              <span
                                key={service._id}
                                style={{
                                  fontSize: "10px",
                                  margin: "0px",
                                }}
                              >
                                {service.serviceType}
                                <span> {service.price} |</span>
                              </span>
                            );
                          })}
                        </div>
                        <span style={{ fontSize: "10px" }}>
                          ₹ : {calculateItemPrice(services) * quantity}
                        </span>
                      </div>
                      <UpdateQty>
                        {quantity > 1 ? (
                          <button
                            onClick={() =>
                              decrementQuantity(_id, quantity, setDisabled)
                            }
                            disabled={isDisabled}
                          >
                            -
                          </button>
                        ) : (
                          <img
                            src="/assets/Icons/delete.svg"
                            onClick={() => removeFromCartOnClick(_id)}
                            alt="delete Icon"
                          />
                        )}
                        <span>{quantity}</span>
                        <button
                          onClick={() =>
                            incrementQuantity(_id, quantity, setDisabled)
                          }
                          disabled={isDisabled}
                        >
                          +
                        </button>
                      </UpdateQty>
                    </PBoxRight>
                  </ProductBox>
                );
              })}
            </CartLeft>

            <CartRight>
              <div style={{ marginTop: "28px", marginBottom: "16px" }}>
                PRICE DETAILS: {cartList.length} items
              </div>
              <Row label={" Total MRP"} value={TotalPrice(cartList)} />
              <Row label={"Convenience Fee"} value={9.99} Convenience />
              <Row label={"Total Amount"} value={TotalPrice(cartList)} bold />
              <PlaceButton onClick={placeOrder}>Pay</PlaceButton>
            </CartRight>
          </>
        )}

        {openAddModal && (
          <Modal closeModal={setAddModal}>
            {addressList.length > 0 ? (
              addressList.map((a) => {
                return (
                  <AddressItem key={a._id}>
                    <input
                      type="radio"
                      name="address"
                      checked={a._id === selectedAddress?._id}
                      onChange={() => onChange(a)}
                    />
                    <AddressInfo>
                      <h4>{a.name}</h4>
                      <p>{a.address}</p>
                      <p>city: {a.city}</p>
                      <p>
                        {a.state}, {a.pinCode}
                      </p>
                      <p>Phone Number: {a.mobileNo}</p>
                    </AddressInfo>
                  </AddressItem>
                );
              })
            ) : <>
              <h4>please add address</h4>
              <Button onClick={()=>navigate("/profile/address") }action="true" >Add address</Button>
              </>}
          </Modal>
        )}
      </CartWrapper>
    </>
  );
}
