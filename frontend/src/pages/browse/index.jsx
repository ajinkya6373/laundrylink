
import {
    Navbar, RatingBadge, SpecialityTag
} from "../../components"
import { DistanceContainer, RatingContainer } from "../main/main"
import { useScrollToTop } from "../../hooks/useScrollToTop";
import {
    BrowseWrapper,
    Card,
    CardImg,
    CardInfo,
    DropdownWrapper,
    PageLeft,
    PageRight,
    PriceBox,
    ServicesBox,
    TagWrapper
} from "./browse"
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, distanceInMeters } from "../../utils/utils";
import { useUserAuth } from "../../context";
import { Navigate, useNavigate } from "react-router";

export default function BrowsePage() {
    const [lsps, setLsps] = useState([]);
    const { userLocation} = useUserAuth();
    const navigate = useNavigate();

    useScrollToTop();
    useEffect(()=>{
        (async()=>{
            try{
                const response = await axios.get(`${BASE_URL}/lsp/lspRanking`)
                setLsps(response.data.lspRankings)
            }catch(err){
                console.log(err)
            }
        })
        ()
    },[])
    return (
        <>
            <Navbar />
            <BrowseWrapper>
                <PageLeft>
                    <h3>Filters</h3>
                    <ServicesBox>
                        <h4>Services</h4>
                        <ul>
                            <li><input type="checkbox" /> <SpecialityTag img="DRY CLEANING.svg" text="Dry Cleaning" small="true" /></li>
                            <li><input type="checkbox"  /> <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" /></li>
                            <li> <input type="checkbox"  /> <SpecialityTag img="WASH DRY FOLD.svg" text="Wash, Dry & Fold" small="true" /> </li>
                        </ul>
                    </ServicesBox>
                </PageLeft>
                <PageRight>
                    <DropdownWrapper>
                        <select>
                            <option value="1">Sort by: Recommended</option>
                            <option value="2">Price: low to high</option>
                            <option value="3">Distance: low to high</option>
                            <option value="4">Customer rating</option>
                        </select>
                    </DropdownWrapper>
                    {
                        lsps.map((i)=>{
                            return  <Card key={i?.lsp?._id}  onClick={()=>navigate(`/lsp/${i?.lsp?._id}`)}>
                            <CardImg>
                                <img src="https://images.unsplash.com/photo-1635274605638-d44babc08a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhdW5kcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="shop" />
                            </CardImg>
                            <CardInfo>
                                <div>
                                    <h2>{i?.lsp?.shopName}</h2>
                                    <DistanceContainer>
                                        <img src="/assets/Icons/LOCATION.svg" alt="Location Icon" />
                                        {distanceInMeters(i.lsp.location.coordinates,userLocation)}
                                        <p>| Sambhaji maharaj chowk, Kopargaon</p>
                                    </DistanceContainer>
                                    <RatingContainer>
                                        <RatingBadge small="true" rating={Math.floor(i.weightedRating)} />
                                        <p>1241 ratings and 226 reviews</p>
                                    </RatingContainer>
                                    <TagWrapper>
                                        <SpecialityTag img="WASH DRY FOLD.svg" text="Wash, Dry & Fold" small="true" />
                                        <SpecialityTag img="DRY CLEANING.svg" text="Dry Cleaning" small="true" />
                                        <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
                                    </TagWrapper>
                                </div>
                                <PriceBox>
                                    <div> <span>₹15 </span>/pcs</div>
                                    <p>Free Delivery</p>
                                </PriceBox>
                            </CardInfo>
                        </Card>
                        }
                        )
                    }
                   
  
                </PageRight>
            </BrowseWrapper>
        </>
    )
}
