import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CatalogItem,
  Navbar,
  RatingBadge,
  Modal,
  SpecialityTag,
} from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import {
  BtnContainer,
  Button,
  CategoryContainer,
  DistanceContainer,
  HedingWrapper,
  LargeImage,
  LspInfo,
  MpageWrapper,
  PageLeft,
  PageRight,
  RatingContainer,
  SmallImgWrapper,
  SpecialityContainer,
  ReviewBox,
  Review,
  ReviewTop,
  ReviewBottom,
  ViewAllButton,
} from "./main";
import axios from "axios";
import {
  BASE_URL,
  distanceInMeters,
  formatCommentTime,
  BadgeText,
} from "../../utils/utils";
import { useUserAuth } from "../../context";
export default function MainPage() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [distance, setDistance] = useState("");
  const [reviewModal, setReviewModal] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [lsp, setLsp] = useState({});
  const navigate = useNavigate();
  const { lspId } = useParams();
  const { userLocation, setLoading } = useUserAuth();
  const { shopName, rating, description, location } = lsp;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch LSP data
        const lspResponse = await axios.get(`${BASE_URL}/lsp/${lspId}`);
        const { rating, user } = lspResponse.data;
        setLsp({ rating, ...user });

        // Fetch review data
        const reviewResponse = await axios.get(`${BASE_URL}/review/${lspId}`);
        const { reviewList } = reviewResponse.data;
        setReviews(reviewList);
        // Fetch catalog data
        const catalogResponse = await axios.get(`${BASE_URL}/catalog/${lspId}`);
        const { items } = catalogResponse.data.catalogList;
        setCatalog(items);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [lspId]);

  useEffect(() => {
    if (lsp && userLocation) {
      const d = distanceInMeters(location?.coordinates, userLocation);
      setDistance(d);
    }
  }, [lsp, userLocation]);
  useScrollToTop();
  return (
    <>
      <Navbar />
      <MpageWrapper>
        <PageLeft>
          <LargeImage
            src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhdW5kcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="shop"
            className="large"
          />
          <SmallImgWrapper>
            <img
              src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdW5kcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="shop"
            />
            <img
              src="https://images.unsplash.com/photo-1635274605638-d44babc08a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhdW5kcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="shop"
            />
            <img
              src="https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="shop"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1675922302302-bf95671f55f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="shop"
            />
          </SmallImgWrapper>
          <BtnContainer>
            <Button action="true" onClick={() => navigate("/cart")}>
              <span>
                <img src="/assets/Icons/CART.svg" alt="cart Icon" />
              </span>
              Proceed to Checkout
            </Button>
            <Button> Schedule a Pickup </Button>
          </BtnContainer>
        </PageLeft>
        <PageRight>
          <h1>{shopName}</h1>
          <RatingContainer>
            <RatingBadge rating={rating} />
            <p>{reviews.length} ratings and reviews</p>
          </RatingContainer>
          <DistanceContainer>
            <img src="/assets/Icons/LOCATION.svg" alt="Location Icon" />
            {distance}
            <p>| Sambhaji maharaj chowk, Kopargaon</p>
          </DistanceContainer>
          <LspInfo>
            <h2>Speciality</h2>
            <SpecialityContainer>
              <SpecialityTag img="WASH DRY FOLD.svg" text="Wash, Dry & Fold" />
              <SpecialityTag img="DRY CLEANING.svg" text="Dry Cleaning" />
              <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" />
            </SpecialityContainer>
            <p>{description}</p>
          </LspInfo>
          <CategoryContainer>
            <HedingWrapper>
              <h3>Categories</h3>
              <span onClick={() => setCategoryModal(true)}>View all</span>
            </HedingWrapper>
            {catalog.slice(0, 3).map((item) => (
              <CatalogItem key={item._id} item={{ shopName, lspId, ...item }} />
            ))}

            {catalog.length > 3 && (
              <ViewAllButton onClick={() => setCategoryModal(true)}>
                View all
              </ViewAllButton>
            )}
            {categoryModal && (
              <Modal closeModal={setCategoryModal}>
                <HedingWrapper>
                  <h3>Categories</h3>
                </HedingWrapper>
                {lspId &&
                  shopName &&
                  catalog.map((item) => (
                    <CatalogItem item={{ shopName, lspId, ...item }} key={item._id}/>
                  ))}
              </Modal>
            )}
          </CategoryContainer>

          <ReviewBox>
            <h3>Ratings & Reviews</h3>
            <RatingContainer>
              <RatingBadge rating={lsp.rating} />
              <p>{reviews.length} ratings and reviews</p>
            </RatingContainer>
            {reviews
              .slice(0, 2)
              .map(({ comment, username, _id, rating, createdAt }) => (
                <Review key={_id}>
                  <ReviewTop>
                    <RatingBadge small rating={rating} /> {BadgeText(rating)}
                  </ReviewTop>
                  <p>{comment}</p>
                  <ReviewBottom>
                    {username} <span>{formatCommentTime(createdAt)}</span>
                  </ReviewBottom>
                </Review>
              ))}

            {reviewModal && (
              <Modal closeModal={setReviewModal}>
                <h3>Ratings & Reviews</h3>
                <RatingContainer>
                  <RatingBadge rating={lsp.rating} />
                  <p>{reviews.length} ratings and reviews</p>
                </RatingContainer>
                {reviews.map(
                  ({ comment, username, _id, rating, createdAt }) => (
                    <Review key={_id}>
                      <ReviewTop>
                        <RatingBadge small rating={rating} />
                        {BadgeText(rating)}
                      </ReviewTop>
                      <p>{comment}</p>
                      <ReviewBottom>
                        {username} <span>{formatCommentTime(createdAt)}</span>
                      </ReviewBottom>
                    </Review>
                  )
                )}
              </Modal>
            )}
            <button onClick={() => setReviewModal(true)}>
              All {reviews.length} Reviews
            </button>
          </ReviewBox>
        </PageRight>
      </MpageWrapper>
    </>
  );
}
