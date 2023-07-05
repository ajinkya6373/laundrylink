import { useEffect } from "react";
import { useUserAuth, useUserData } from "../context";
import { BASE_URL } from "../utils/utils";
import axios from "axios";

export const useAuthPersist = () => {
    const {
        userProfile,
        isUserLoggedIn,
        setIsUserLoggedIn,
        setUserData,
        setLoading,
        setUserLocation

    } = useUserAuth();
    const { userDispatch } = useUserData();

    useEffect(() => {

        if (isUserLoggedIn && userProfile?._id) {
            (async () => {
                setLoading(true);
                const res = await axios.get(`${BASE_URL}/userData/${userProfile._id}`)
                  if(res.data.success){
                    userDispatch({
                      type:"INITIALIZE_LISTS",
                      payload:{
                        cartList:res.data.cartList,
                        addressList:res.data.addressList,
                        orderList:res.data.orderList,
                      }
                    })
                  }
                setLoading(false);
            })();
        }
    }, [userProfile]);



    useEffect(() => {
        (async () => {
            setLoading(true);
            const login = await JSON.parse(localStorage.getItem("login"));
            const user = await JSON.parse(localStorage.getItem("user"));
            if (login !== undefined && user !== undefined) {
                
                setIsUserLoggedIn(login);
                setUserData(user);
            }
            setLoading(false);

        })();
    }, []);

    useEffect(() => {
        (async () => {
          setLoading(true);
          await localStorage.setItem("login", isUserLoggedIn);
          await localStorage.setItem("user", JSON.stringify(userProfile));
          await navigator.geolocation.getCurrentPosition(
            position => {
              setUserLocation([
                position.coords.latitude,
                position.coords.longitude
              ]);
            },
            error => console.log(error),
            { enableHighAccuracy: true } 
          );
      
          setLoading(false);
        })();
      }, [isUserLoggedIn, userProfile]);
      


};
