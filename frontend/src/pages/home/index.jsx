import { useNavigate } from "react-router-dom";
import { Navbar, LaundryCard } from "../../components"
import { useScrollToTop } from "../../hooks/useScrollToTop";
import {
  HeroSection,
  Heading,
  HeroImg,
  SignupButton,
  CardSection,
  CardWrapper,
  HeadingWrapper,
  InfoSection,
  Icon,
  IconWrapper,
  InfoContainer,
  ServiceSection,
  ServiceWrapper,
  ServiceLeft,
  ServiceRight,
  Item,
  LspSection,
  LspLeft
} from "./home";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/utils";
import { useUserAuth } from "../../context";

export default function HomePage() {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserAuth();
  const [lspList, setLspList] = useState([])
  useEffect(()=>{
      try {
        (async()=>{
         const {data:{lspList}}= await axios.get(`${BASE_URL}/lsp/nearbylsp`)
         setLspList(lspList)
     
        })
        ()
      } catch (error) {
        console.log(error);
      }
  },[])
  useScrollToTop();
  return (
    <>
      <Navbar home />
      <HeroSection >
        <div>
          <Heading>Laundry & dry <br /> cleaning picked <br /> up & delivered to <br /><span>your door.</span></Heading>
          <p>Get convenient and budget-friendly laundry and dry cleaning <br />service delivered straight to you from your local provider.</p>
          <SignupButton onClick={()=> isUserLoggedIn ? navigate("/browse-lsp") : navigate("/signin")}>
              {isUserLoggedIn?"Find Laundry Service Providers":"Sign In for Free Pickup & Delivery"}
          </SignupButton>
        </div>
        <HeroImg src="/assets/Images/heroImg.svg" alt="heroImg" />
      </HeroSection>
      <CardSection >
        <HeadingWrapper >
          <h1>Nearest laundries</h1>
          <button onClick={()=>navigate("/browse-lsp")}>See more </button>
        </HeadingWrapper>
        <CardWrapper>
          {
            lspList.slice(0,4).map(lsp=>   <LaundryCard key={lsp._id} lspData ={lsp}/>)
          }
        </CardWrapper>
      </CardSection>
      <InfoSection >
        <h1>How LaundryLink <span>Works</span></h1>
        <p>Save time and money with free pickup and delivery to your home or office</p>
        <InfoContainer>
          <IconWrapper>
            <Icon>
              <img src="/assets/Icons/SELECT A LAUNDRY.svg" alt="SELECT A LAUNDRY" />
            </Icon>
            <p>
              <span> Select a Laundry- </span>
              Choose your closest <br /> laundry
            </p>
          </IconWrapper>
          <IconWrapper>
            <Icon>
              <img src="/assets/Icons/sCHEDULE A PICKUP.svg" alt="PICKUP" />
            </Icon>
            <p>
              <span>  Schedule a Pickup- </span>
              Choose pickup and <br /> delivery days
            </p>
          </IconWrapper>
          <IconWrapper>
            <Icon>
              <img src="/assets/Icons/TRUCK.svg" alt="Truck Icon" />
            </Icon>
            <p>
              <span> We Pickup & Deliver- </span>
              Your clothes are <br />picked up and dropped off after cleaning
            </p>
          </IconWrapper>
        </InfoContainer>
      </InfoSection>
      <ServiceSection>
        <h2>Find  LSP by Services</h2>
        <ServiceWrapper>
          <ServiceLeft>
            <Item>
              <Icon>
                <img src="/assets/Icons/WASH DRY FOLD.svg" alt="SWASH DRY FOLD." />
              </Icon>
              <span>Wash, Dry & Fold </span>
            </Item>
            <Item>
              <Icon>
                <img src="/assets/Icons/PRESS.svg" alt="SPRESS" />
              </Icon>
              <span>Steam Press </span>
            </Item>
            <Item>
              <Icon>
                <img src="/assets/Icons/DRY CLEANING.svg" alt="DRY CLEANING" />
              </Icon>
              <span>Dry Cleaning</span>
            </Item>
            <Item>
              <Icon>
                <img src="/assets/Icons/SHOES.svg" alt="SHOES" />
              </Icon>
              <span>Shoe Cleaning</span>
            </Item>
          </ServiceLeft>
          <ServiceRight>
            <img src="https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="cloths img" />
            <h1>Wash, Dry & Fold</h1>
            <p>Wash, Dry, and Fold is a laundry service where clothes, linens, and other items are washed, dried, and then folded and packaged for pick-up or delivery. This service is typically used by individuals, families, and businesses that do not have the time or resources to do their laundry on their own.</p>
          </ServiceRight>
        </ServiceWrapper>
      </ServiceSection>
      <LspSection>
        <LspLeft>
          <h1>Register as Laundry Service Provider</h1>
          <p>Unleash the full potential of your laundry business by registering as a provider on our website. Reach a wider audience and expand your customer base with ease. Don't miss out on this opportunity to grow your business and increase your revenue. Sign up today and let us help you take your laundry services to the next level!</p>
          <button onClick={()=> navigate("/lsp-registration")}>Register Now</button>
        </LspLeft>
        <img src="https://images.unsplash.com/photo-1582384704472-5dee4403f993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="Laundry "  />
      </LspSection>

    </>
  )
}
