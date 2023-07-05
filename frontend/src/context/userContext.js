
import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducer";
export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const INITIAL_STATE = {
        cartList: [],
        paymentList: [],
        addressList: [],
        orderList: [],
    }

    const [userData, userDispatch] = useReducer(userReducer, INITIAL_STATE)
    return (
        <UserDataContext.Provider value={{ userData, userDispatch }}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext);
