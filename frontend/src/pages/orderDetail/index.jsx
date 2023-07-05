import { useNavigate, useParams } from "react-router-dom";
import { Modal, Navbar } from "../../components";
import {
  PageWrapper,
  FlexContainer,
  OrderInfoBox,
  OrderBreakDownBox,
  PaymentInfo,
  AddressBox,
  StatusBadge,
  OrderItem,
  OrderDetails,
  OrderNumber,
  PaymentSummary,
  PaymentItem,
  AddressHeading,
  UserName,
  AddressLine,
  PhoneNumber,
} from "./orderDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BASE_URL,
  TotalPrice,
  calculateItemPrice,
  formatDateTime,
  normalizeName,
} from "../../utils/utils";
import { useUserAuth } from "../../context";
import ReviewModal from "../../components/ModalType/reviewModal";

export default function OrderDetailPage() {
  const { userProfile, setLoading } = useUserAuth();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [order, setOrder] = useState({});
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const {
          data: { success, order },
        } = await axios.get(`${BASE_URL}/order/${userProfile._id}/${orderId}`);

        if (success) {
          setOrder(order);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [userProfile._id, orderId]);

  // Destructure relevant properties from order object
  const { items, status, createdAt, _id, lspId, deliveryAddress } = order || {};
  const { name, address, city, pinCode, state, mobileNo } =
    deliveryAddress || {};

  return (
    <>
      <Navbar />
      <PageWrapper>
        <span onClick={()=>navigate("/profile/orders")} style={{cursor:"pointer"}}>Back to orders</span>
        <FlexContainer>
          <div>
            <OrderInfoBox numberItems={items?.length}>
              <h3>Order {status}</h3>
              <time>{formatDateTime(createdAt)}</time>
              <StatusBadge state={status}>{status}</StatusBadge>
              {status === "delivered" && (
                <button onClick={() => setReviewModalOpen(true)}>
                  Write a review
                </button>
              )}
            </OrderInfoBox>
            <OrderBreakDownBox>
              <h5>Your items</h5>
              {items?.map(
                ({
                  _id,
                  itemName,
                  quantity,
                  specialInstructions,
                  services,
                }) => (
                  <OrderItem key={_id}>
                    <img
                      src={`/assets/catalouge/${normalizeName(itemName)}.svg`}
                      alt={itemName}
                    />
                    <div>
                      <h4>
                        {quantity} X {itemName}
                      </h4>
                      <p>
                        <span>Description : </span>
                        {specialInstructions}
                      </p>
                      <p>
                        {services.map(({ serviceType, _id }) => (
                          <span key={_id}> {serviceType} |</span>
                        ))}
                      </p>
                      <strong>
                        ₹ {calculateItemPrice(services) * quantity}
                      </strong>
                    </div>
                  </OrderItem>
                )
              )}
            </OrderBreakDownBox>
          </div>
          <div>
            <PaymentInfo>
              <OrderDetails>
                <OrderNumber>
                  Order #{_id} ({items?.length} items)
                </OrderNumber>
                <p>Order placed on {formatDateTime(createdAt)}</p>
                <p>Paid by cash on delivery</p>
              </OrderDetails>
              <PaymentSummary>
                <PaymentItem>
                  Order amount <span>₹ {TotalPrice(items)}</span>
                </PaymentItem>
                <PaymentItem>
                  Tax <span>₹ 15</span>
                </PaymentItem>
              </PaymentSummary>
              <PaymentSummary>
                <PaymentItem>
                  Order total <span>₹ {TotalPrice(items) + 15}</span>
                </PaymentItem>
              </PaymentSummary>
            </PaymentInfo>
            <AddressBox>
              <AddressHeading>Deliver to</AddressHeading>
              <UserName>{name}</UserName>
              <AddressLine>{address}</AddressLine>
              <AddressLine>
                {city} {pinCode} {state}
              </AddressLine>
              <PhoneNumber>
                <strong>Phone no.</strong> +91 {mobileNo}
              </PhoneNumber>
            </AddressBox>
          </div>
        </FlexContainer>
      </PageWrapper>
      {reviewModalOpen && (
        <Modal closeModal={() => setReviewModalOpen(false)}>
          <ReviewModal lspId={lspId} setReviewModalOpen={setReviewModalOpen} />
        </Modal>
      )}
    </>
  );
}
