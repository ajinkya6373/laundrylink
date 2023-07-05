
import {  useNavigate } from "react-router-dom"
import {
  CardWrapper,
  CardTop,
  Image,
  RatingBadge,
  CardBottom,
  CardFooter,
  Distance,
  PriceContainer
} from "./laundryCard"
import {distanceInMeters} from "../../utils/utils"
import { useUserAuth } from "../../context";
export default function LaundryCard({lspData}) {
  const navigate = useNavigate();
  const { userLocation,setLoading} = useUserAuth();
  const {_id,description,distance,shopName,speciality,location:{coordinates}  } =lspData;
  const periodIndex = description.indexOf('.');
  return (
    <CardWrapper onClick={()=>navigate(`/lsp/${_id}`)}>
      <CardTop>
        <Image src="https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="shop img" />
        <RatingBadge >
          <img src="/assets/Icons/STAR.svg" alt="Rating Badge" />
          <span>4.2</span>
        </RatingBadge>

      </CardTop>
      <CardBottom>
        <h1>{shopName}</h1>
        <p>{description.slice(0, periodIndex + 1)}</p>
        <CardFooter>
          <Distance>
            <img src="/assets/Icons/LOCATION.svg" alt="Location icon" />
            <span>{distanceInMeters(coordinates,userLocation)}</span>
          </Distance>
          <PriceContainer>
            ₹15 <span>/pcs</span>
          </PriceContainer>
        </CardFooter>
      </CardBottom>
    </CardWrapper>
  )
}
