import { useState } from "react";
import { AddressForm, AddressModal } from "../../../../components";
import { useUserData } from "../../../../context";
import { Heading } from "../../profile";

import { useUserActions } from "../../../../hooks";
import {
  AddAddressButton,
  AddressContainer,
  AttributeContainer,
  AttributeName,
  AttributeValue,
  DeleteIcon,
  EditButton,
  PageWrapper,
} from "./addressBook";

export default function AddressBook() {
  const { addAddress, deleteAddress } = useUserActions();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editAddress, setEditAddress] = useState("");

  const {
    userData: { addressList },
  } = useUserData();
  const submitHandler = (values) => {
    if (addAddress(values)) {
      setShowAddressForm(false);
    }
  };
  const handleClickonEdit = (data) => {
    setEditModal(true);
    setEditAddress(data);
  };
  return (
    <PageWrapper>
      <Heading>Address Book</Heading>
      {addressList.length > 0 ? (
        addressList.map((addressItem) => {
          const { _id, name, mobileNo, address, city, state, pinCode } =
            addressItem;
          return (
            <AddressContainer key={_id}>
              <AttributeContainer>
                <AttributeName>Name:</AttributeName>
                <AttributeValue>{name}</AttributeValue>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>Mobile No:</AttributeName>
                <AttributeValue>{mobileNo}</AttributeValue>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>Address:</AttributeName>
                <AttributeValue>{address}</AttributeValue>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>City:</AttributeName>
                <AttributeValue>{city}</AttributeValue>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>State:</AttributeName>
                <AttributeValue>{state}</AttributeValue>
              </AttributeContainer>
              <AttributeContainer>
                <AttributeName>Pin Code:</AttributeName>
                <AttributeValue>{pinCode}</AttributeValue>
              </AttributeContainer>
              <EditButton
                src="/assets/Icons/edit.svg"
                alt="edit"
                onClick={() => handleClickonEdit(addressItem)}
              />
              <DeleteIcon
                src="/assets/Icons/delete.svg"
                alt="delete"
                onClick={() => deleteAddress(_id)}
              />
            </AddressContainer>
          );
        })
      ) : (
        <Heading>"Please add address"</Heading>
      )}
      <AddAddressButton onClick={() => setShowAddressForm(!showAddressForm)}>
        {showAddressForm ? "Cancel" : "Add Address"}
      </AddAddressButton>
      {showAddressForm && (
        <>
          <Heading>Add Address</Heading>
          <AddressForm submitHandler={submitHandler} />
        </>
      )}
      {editModal && (
        <AddressModal closeModal={setEditModal} editAddress={editAddress} />
      )}
    </PageWrapper>
  );
}
