import { BadgeWrapper } from "./badge";

export default function RatingBadge({small,rating=0}) {
  return (
    <BadgeWrapper small={small} rating={rating}>
        {rating}  <img src="/assets/Icons/STAR2.svg" alt="STAR icon" />  
    </BadgeWrapper>
  )
}
