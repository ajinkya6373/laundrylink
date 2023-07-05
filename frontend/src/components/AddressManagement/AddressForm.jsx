import { useState } from "react";
import { AddressInput, DummyAddress } from "../../utils/utils";
import FormInput from "../FormInput";
import { BtnContainer } from "./addressManagement";

export default function AddressForm({ submitHandler, editAddress }) {
  const [values, setValues] = useState(
    editAddress
      ? {
          name: editAddress.name,
          address: editAddress.address,
          city: editAddress.city,
          state: editAddress.state,
          pinCode: editAddress.pinCode,
          mobileNo: editAddress.mobileNo,
        }
      : {
          name: "",
          address: "",
          city: "",
          state: "",
          pinCode: "",
          mobileNo: "",
        }
  );

  let isDisabled =
    Object.values(values).every((value) => value === "") ||
    values.mobileNo.length !== 10 ||
    isNaN(values.mobileNo);

  const clickHandler = (e) => {
    e.preventDefault();
    submitHandler(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={clickHandler}>
        {AddressInput.map((i) => (
          <FormInput
            key={i.id}
            {...i}
            value={values[i.name]}
            onChange={onChange}
          />
        ))}
        <BtnContainer>
          <button type="submit" disabled={isDisabled}>
            Save
          </button>
          <button onClick={() => setValues(DummyAddress)} type="button">
            Fill with dummy Address
          </button>
        </BtnContainer>
      </form>
    </div>
  );
}
