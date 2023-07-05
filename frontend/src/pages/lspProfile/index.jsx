import { useState } from "react";
import { FormInput, Navbar, SpecialityTag } from "../../components";
import { ProfileLeft, ProfileRight, ProfileWrapper } from "./lspProfile";
import LspRegistrationPage from "../Auth/lspRegistration";
import { AccountSection, Heading, Image, ImageContainer, LaundrySection, PageWrapper, ServiceSection, SubHeading, TextAreaSection } from "../Auth/lspRegistration/lspRegistration";
import { Button } from "../Auth/AuthStyle";
export default function LspProfile() {
const sideBarList = ["LSP profile", "Order management", "Edit catalogue"];
const [activeItemIndex, setActiveItemIndex] = useState(() => {
    const storedActiveItemIndex = sessionStorage.getItem("activeItemIndex");
    return storedActiveItemIndex ? parseInt(storedActiveItemIndex) : 0;
  });

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
    if (index === 1) {
    //   history.push('/profile/orders');
    } else if (index === 2) {
    //   history.push('/profile/address');
    }else{
    //   history.push('/profile');
    }
  };
  return (
    <>
      <Navbar/>
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
          {/* <RightWrapper> */}
            
          {activeItemIndex === 0 ? (
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
                    //   onChange={handleFileInputChange}
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
                      {/* {imagePreviews.map((preview, index) => (
                        <Image key={index} src={preview} alt={`preview ${index + 1}`} />
                      ))} */}
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
                  <Button type="submit" width="true">Save</Button>
                </PageWrapper>
          ) : activeItemIndex === 1 ? (
            <LspRegistrationPage/>

          ) : (
            <LspRegistrationPage/>

          )}
          {/* </RightWrapper> */}
        </ProfileRight>
      </ProfileWrapper>
    </>
  )
}
