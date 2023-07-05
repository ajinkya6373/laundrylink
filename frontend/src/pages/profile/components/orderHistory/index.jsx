import  { useState } from "react";
import { Modal } from "../../../../components";
import { useUserData } from "../../../../context";
import { formatDateTime } from "../../../../utils/utils";
import {
  ArrowRight,
  DateContainer,
  Items,
  OrderItem,
  StatusBadge,
} from "./order";
import ReviewModal from "../../../../components/ModalType/reviewModal";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../profile";

export default function Orders() {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [lspIdForReview, setLspIdForReview] = useState("");
  const { userData: { orderList } } = useUserData();
  const navigate = useNavigate();
  
  const openReviewModal = (lspId,event) => {
    event.stopPropagation();
    setReviewModalOpen(true);
    setLspIdForReview(lspId);
  };

  return (
    <>
      {orderList.length>0?
       orderList.map(({ _id, lspName, items, status, createdAt, lspId }) => (
        <OrderItem key={_id} onClick={()=>navigate(`/orderDetails/${_id}`)}>
          <h3>{lspName}</h3>
          <DateContainer>{formatDateTime(createdAt)}</DateContainer>
          <div>
            {items.map((item) => (
              <Items key={item._id}>{item.itemName} | </Items>
            ))}
          </div>
          <ArrowRight src="/assets/Icons/rightArrow.svg" alt="RightArrow" />
          <StatusBadge state={status}>{status} </StatusBadge>
          {status === "delivered" && (
            <button onClick={(event) => openReviewModal(lspId,event)}>Add a review</button>
          )}
        </OrderItem>
      ))
    :
    <Heading>No Orders</Heading>
    }
      {reviewModalOpen && lspIdForReview && (
        <Modal closeModal={() => setReviewModalOpen(false)}>
          <ReviewModal lspId={lspIdForReview} setReviewModalOpen={setReviewModalOpen}/>
        </Modal>
      )}
    </>
  );
}
