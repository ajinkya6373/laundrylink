import { Modal } from ".."
import { useUserActions } from "../../hooks"
import AddressForm from "./AddressForm";
export default function AddressModal({ closeModal, editAddress,setAddress }) {
    const { updateAddress } = useUserActions();
    const submitHandler = (values) => {
        if(updateAddress(editAddress._id, values)){
            closeModal(false);
            // setAddress({_id:editAddress._id,...values})
        }
    }

    return (
        <Modal closeModal={closeModal}>
            <h2>Edit Address</h2>
            <AddressForm submitHandler={submitHandler} editAddress={editAddress}/>
        </Modal>
    )
}
