import { useState } from "react";
import { ItemLeft, ItemRight, ItemWrapper, NamePrice } from "./catalogItem";
import Modal from "../Modal";
import ServiceModal from "../ModalType/serviceModal";
import { normalizeName } from "../../utils/utils";

export default function CatalogItem({ item }) {
  const [categoryModal, setCategoryModal] = useState(false);
  const { name } = item;
  return (
    <ItemWrapper>
      <ItemLeft>
        <img src={`/assets/catalouge/${normalizeName(name)}.svg`} alt={name} />
        <NamePrice>
          {name}
          <div>
            ₹15 <span>/pcs</span>
          </div>
        </NamePrice>
      </ItemLeft>
      <ItemRight>
        <button onClick={() => setCategoryModal(true)}>Add</button>
      </ItemRight>
      {categoryModal && (
        <Modal closeModal={setCategoryModal}>
          <ServiceModal item={item} setCategoryModal={setCategoryModal} />
        </Modal>
      )}
    </ItemWrapper>
  );
}
