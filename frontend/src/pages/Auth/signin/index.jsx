import React, { useState } from "react";
import { Navbar, InputBox, Toast } from "../../../components";
import {
  Button,
  PageLeft,
  PageRight,
  PageWrapper,
  SubText,
  SubTextLink,
} from "../AuthStyle";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router";
export default function SignInPage() {
  const { logInUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;
  const isDisabled = email === "" || password === "" ;
  
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logInUser(formData);
  };

  return (
    <>
      <Navbar />
      <Toast/>
      <PageWrapper>
        <PageRight onSubmit={handleSubmit}>
          <h1>Welcome back!</h1>
          <InputBox
            type="email"
            id="email"
            placeholder="Please enter your email"
            label="Your email"
            required={true}
            value={formData.email}
            onChange={handleChange}
          />
          <InputBox
            type="password"
            id="password"
            placeholder="Enter password"
            label="Password"
            autoComplete="current-password"
            required={true}
            value={formData.password}
            onChange={handleChange}
          />
          <SubText>Forgot password?</SubText>
          <Button type="submit" disabled={isDisabled}>Sign In</Button>
          <SubTextLink>
            <span onClick={() => navigate("/signup")}>
              Don't have an account ?
            </span>
          
          </SubTextLink>
        </PageRight>
        <PageLeft>
          <img
            src="https://images.unsplash.com/photo-1622473590925-e3616c0a41bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
            alt="washing machine"
          />
        </PageLeft>
      </PageWrapper>
    </>
  );
}
