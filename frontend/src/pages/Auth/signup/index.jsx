import { useState } from "react";
import { Navbar, InputBox } from "../../../components";
import {
  Button,
  PageLeft,
  PageRight,
  PageWrapper,
  SubText,
  SubTextLink,
} from "../AuthStyle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
export default function SignInPage() {
  const navigate = useNavigate();
  const { signUpUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    agreeToTerms: false,
  });
  const { email, username, password, agreeToTerms } = formData;
  const isDisabled =
    email === "" ||
    username === "" ||
    password === "" ||
    agreeToTerms === false;

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(formData); // Call your signUpUser function with the form data
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <PageRight onSubmit={handleSubmit}>
          <h1>Create an account to continue</h1>
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
            type="text"
            id="username"
            placeholder="Enter your username"
            label="Create username"
            required={true}
            value={formData.username}
            onChange={handleChange}
          />
          <InputBox
            type="password"
            id="password"
            placeholder="Enter password"
            label="Password"
            required={true}
            value={formData.password}
            onChange={handleChange}
          />
          <SubText>
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            By creating an account you are agreeing to our Terms and Conditions
            and Privacy Policy
          </SubText>
          <Button type="submit" disabled={isDisabled}>
            Sign Up
          </Button>
          <SubTextLink>
            <span onClick={() => navigate("/signin")}>
              Already have an account ?
            </span>
            <span>Register as a Laundry</span>
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
