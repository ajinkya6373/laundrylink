import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { AddressBook, Orders, UserProfile } from "./components";
import { ProfileLeft, ProfileRight, ProfileWrapper } from "./profile";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const sideBarList = ["User profile", "Order history", "Address book"];
  const [activeItemIndex, setActiveItemIndex] = useState(() => {
    const storedActiveItemIndex = sessionStorage.getItem("activeItemIndex");
    return storedActiveItemIndex ? parseInt(storedActiveItemIndex) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("activeItemIndex", activeItemIndex.toString());
  }, [activeItemIndex]);


  useEffect(() => {
    const path = location.pathname;
    if (path === "/profile/orders") {
      setActiveItemIndex(1);
    } else if (path === "/profile/address") {
      setActiveItemIndex(2);
    } else {
      setActiveItemIndex(0);
    }
  }, [location]);
  const handleItemClick = (index) => {
    setActiveItemIndex(index);
    if (index === 1) {
      navigate('/profile/orders');
    } else if (index === 2) {
      navigate('/profile/address');
    }else{
      navigate('/profile');
    }
  };

  return (
    <>
      <Navbar />
      <ProfileWrapper>
        <ProfileLeft>
        <ul>
            {sideBarList.map((item, index) => {
              return (
                <li
                  className={activeItemIndex === index ? "active" : ""}
                  key={index}
                  onClick={()=>handleItemClick(index)}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </ProfileLeft>
        <ProfileRight>
          {activeItemIndex === 0 ? (
            <UserProfile />
          ) : activeItemIndex === 1 ? (
            <Orders />
          ) : (
            <AddressBook/>
          )}
        </ProfileRight>
      </ProfileWrapper>
    </>
  );
}
