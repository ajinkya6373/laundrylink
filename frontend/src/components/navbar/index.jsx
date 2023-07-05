import { useNavigate } from "react-router-dom";
import {
  NavHeader,
  Logo,
  Nav,
  NavList,
  NavListItem,
  NavButton,
  ProfileIcon,
  NavLeft,
  CartBadge,
} from "./navbar";
import { useUserAuth, useUserData } from "../../context";
import { getInitials } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function Navbar({ home }) {
  const navigate = useNavigate();
  const { isUserLoggedIn, userProfile } = useUserAuth();
  const [Initials, setInitials] = useState("");
  const { userData:{cartList} } = useUserData();
  useEffect(() => {
    setInitials(getInitials(userProfile?.username));
  }, [userProfile]);

  return (
    <NavHeader home={home}>
      <Nav>
        <Logo
          src={`/assets/Icons/${home ? "logo.svg" : "Dlogo.svg"}`}
          onClick={() => navigate("/")}
        />
        <NavList flex={2}>
          <NavListItem onClick={() => navigate("/")}>Home</NavListItem>
          <NavListItem>About</NavListItem>
          <NavListItem>
            <span>
              <img src="/assets/Icons/LOCATION.svg" alt="Location" /> Location
            </span>
          </NavListItem>
        </NavList>

        <NavList>
          {isUserLoggedIn ? (
            <NavLeft>
              <img
                src={`/assets/Icons/${home ? "cart.svg" : "cartB.svg"}`}
                alt="cart"
                onClick={() => navigate("/cart")}
              />
              {cartList.length>0 && (
                <CartBadge home={home}>{cartList.length}</CartBadge>
              )}
              <ProfileIcon onClick={() => navigate("/profile")}>
                {Initials}
              </ProfileIcon>
            </NavLeft>
          ) : (
            <>
              <NavButton home={home} onClick={() => navigate("/signin")}>
                Log In
              </NavButton>
              <NavButton
                action="true"
                home={home}
                onClick={() => navigate("/signup")}
              >
                Get started
              </NavButton>
            </>
          )}
        </NavList>
      </Nav>
    </NavHeader>
  );
}
