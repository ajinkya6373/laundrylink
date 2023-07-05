import { useState } from "react";
import {
  ActionButton,
  Heading,
  ModalTop,
  ModalWrapper,
  NameSection,
  Star,
  StarRatingContainer,
  TextArea,
} from "./ModalType";
import { useUserActions } from "../../hooks/useUserAction";


export default function ReviewModal({lspId,setReviewModalOpen}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const {addReviewOnClick} = useUserActions();
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const clickHandler =()=>{
    addReviewOnClick(lspId,rating,comment,setReviewModalOpen)
  }
  return (
    <ModalWrapper>
      <ModalTop>
        <NameSection>
          <Heading>Rate your order</Heading>
          <StarRatingContainer>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <Star
                  key={ratingValue}
                  isActive={ratingValue <= rating}
                  onClick={() => handleRatingChange(ratingValue)}
                >
                  &#9733;
                </Star>
              );
            })}
          </StarRatingContainer>
        </NameSection>
      </ModalTop>
      <Heading>Write a review</Heading>
      <TextArea placeholder="Share your experience... " onChange={(e)=>setComment(e.target.value)}/>
      <ActionButton onClick={clickHandler}>Submit</ActionButton>
    </ModalWrapper>
  );
}
