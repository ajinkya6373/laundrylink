import { useState } from "react";
import { Navbar, FormInput, SpecialityTag } from "../../../components";
import {
  AccountSection,
  Heading,
  Image,
  ImageContainer,
  LaundrySection,
  PageWrapper,
  ServiceSection,
  SubHeading,
  TextAreaSection,
} from "./lspRegistration";
import { Button } from "../AuthStyle";
import { useNavigate } from "react-router-dom";

export default function LspRegistrationPage() {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const selectedPreviews = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        selectedPreviews.push(reader.result);
        if (selectedPreviews.length === files.length) {
          setImages(files);
          setImagePreviews(selectedPreviews);
        }
      };
    });
  };
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Heading>New LSP registration form</Heading>
        <SubHeading>Account information</SubHeading>
        <AccountSection>
          <FormInput
            type="email"
            id="email"
            placeholder="Please enter your email"
            label="Email"
            errorMessage="Please enter valid email!"
            required={true}
          />
          <FormInput
            type="password"
            id="password"
            placeholder="Please enter your password"
            label="Password"
            errorMessage="Please enter valid password!"
            required={true}
          />
        </AccountSection>
        <SubHeading>Laundry information</SubHeading>
        <LaundrySection>
          <FormInput
            type="text"
            id="LaundryName"
            placeholder="Laundry name"
            label="Laundry name"
            errorMessage="Please fill the name!"
            required={true}
          />
          <FormInput
            type="text"
            id="ownerName"
            placeholder="Owner name"
            label="Owner name"
            errorMessage="Please fill the Owner name!"
            required={true}
          />
          <FormInput
            type="text"
            id="phonenNo"
            placeholder="Phone no."
            label="Phone no."
            errorMessage="Please enter valid mobileNo!"
            pattern="^[0-9]{10}$"
            required={true}
          />
          <FormInput
            type="text"
            id="address"
            placeholder="Address"
            label="Address"
            required={true}
            errorMessage="Please fill the Address!"
          />
          <FormInput
            type="text"
            id="city"
            placeholder="City"
            label="City"
            required={true}
            errorMessage="Please fill the city!"
          />
          <FormInput
            type="text"
            id="state"
            placeholder="State"
            label="State"
            errorMessage="Please fill the state!"
            required={true}
          />
          <FormInput
            type="text"
            id="zipCode"
            placeholder="pincode"
            label="Pincode"
            errorMessage="Please fill the pincode!"
            required={true}
          />
          <FormInput
            type="file"
            id="file"
            label="Select multiple images (upto 5)"
            multiple
            onChange={handleFileInputChange}
          />
          <TextAreaSection>
            <label htmlFor="description">Laundry description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </TextAreaSection>
          <ImageContainer>
            {imagePreviews.map((preview, index) => (
              <Image key={index} src={preview} alt={`preview ${index + 1}`} />
            ))}
          </ImageContainer>
        </LaundrySection>
        <SubHeading>Specialty</SubHeading>
        <ServiceSection>
        <ul>
          <li>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
          </li>
          <li>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
          </li>
          <li>
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
          </li>
        </ul>
        </ServiceSection>
        <Button type="submit" width="true" onClick={()=> navigate("/createCatalog")}>Save</Button>
      </PageWrapper>
    </>
  );
}
