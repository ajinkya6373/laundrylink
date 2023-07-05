import { useEffect, useState } from "react";
import {
  ModalWrapper,
  ActionButton,
  ButtonSections,
  IncrementDecrement,
  ModalTop,
  NameSection,
  ServiceButton,
  TextArea,
} from "./ModalType";

import { useUserActions } from "../../hooks/useUserAction";
import { calculateTotalPrice } from "../../utils/utils";

export default function ServiceModal({ item,setCategoryModal }) {
  const {addToCartOnClick} =useUserActions()
  const [selectedServices, setSelectedServices] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [comment, setComment] = useState("");
  const { name, servicePrices, lspId, shopName, _id } = item;
  const handleServiceSelect = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice(selectedServices,servicePrices)
    setTotalPrice(totalPrice * quantity);
  }, [selectedServices, quantity, servicePrices]);
  const isServiceSelected = (service) => selectedServices.includes(service);
  const isDisabled = totalPrice <= 0;

  const clickHandler = () => {
    const cartItem = {
      itemName: name,
      itemId: _id,
      specialInstructions: comment,
      quantity,
      services: selectedServices.map((service) => {
        const { _id, price } = servicePrices.find(
          (s) => s.serviceType === service
        );
        return { serviceId: _id, serviceType: service, price };
      }),
    };
   addToCartOnClick(cartItem,lspId,cartItem,shopName,setCategoryModal)
  };


  return (
    <ModalWrapper>
      <ModalTop>
        <NameSection>
          <h4>{name}</h4>
          <span>Choose the services</span>
        </NameSection>
        <IncrementDecrement>
          <span>₹ {totalPrice}</span>
          <div>
            <button onClick={handleQuantityDecrement}>-</button>
            {quantity}
            <button onClick={handleQuantityIncrement}>+</button>
          </div>
        </IncrementDecrement>
      </ModalTop>
      <ButtonSections>
        {servicePrices.map(({ serviceType, price, _id }) => (
          <div key={_id}>
            <ServiceButton
              onClick={() => handleServiceSelect(serviceType)}
              selected={isServiceSelected(serviceType)}
            >
              {serviceType}
            </ServiceButton>
            <span>₹{price} </span>
          </div>
        ))}
      </ButtonSections>
      <p>Special Instructions</p>
      <TextArea
        placeholder="Add Instructions...."
        onChange={(e) => setComment(e.target.value)}
      />
      <ActionButton disabled={isDisabled} onClick={clickHandler}>Proceed</ActionButton>
    </ModalWrapper>
  );
}
