import axios from "axios";
import { useUserAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from "../utils/utils";
import { useUserData } from "../context";
export const useAuth = () => {
    const { userDispatch } = useUserData();
    const navigate = useNavigate();
    const {
        setIsUserLoggedIn,
        setUserData,
        userLocation,
        setToastMsg,
        setToastType,
        setLoading,
    } = useUserAuth();

    const signUpUser = async ({ username, email, password }, redirectPath) => {
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/user/new`, {
                username,
                email,
                password,
                location: {
                    coordinates: userLocation,
                    type: 'Point',
                },
            });

            const { data } = response;

            if (data.success) {
                setIsUserLoggedIn(true);
                setUserData(data.user);
                setLoading(false);
                if (redirectPath) {
                    navigate(redirectPath);
                } else {
                    navigate('/');
                }
            } else {
                setToastType("error")
                setToastMsg(data.message)
                throw new Error(data.message);
            }
        } catch (error) {
            setToastType("error")
            setToastMsg(error.response.data.message)
            console.error(error.response.data.message);
            setLoading(false);
            return { data: { success: false, message: error.response.data.message } };
        }
    };

    const logInUser = async ({ email, password }, redirectPath) => {
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/user`, {
                user: {
                    email,
                    password,
                },
            });
            const { data } = response;
            if (data.success) {
                setIsUserLoggedIn(true);
                setUserData(data.user);
                setLoading(false);
                if (redirectPath) {
                    navigate(redirectPath);
                } else {
                    navigate('/');
                }
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error.message);
            setToastType("error")
            setToastMsg(error.response.data.message)
            setLoading(false);
            return { data: { success: false, message: error.response.data.message } };
        }
    };

    const logUserOut = () => {
        setIsUserLoggedIn(false);
        userDispatch({
            type: "FLUSH_DATA",
        });
        setUserData({});
        navigate('/');
    };
    return {
        signUpUser,
        logInUser,
        logUserOut
    }
}