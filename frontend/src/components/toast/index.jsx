
import { useEffect, useRef } from "react";
import { useUserAuth } from "../../context";
import { ToastContainer, Image } from "./toast";

export default function Toast({ imgUrl }) {
  const {
    toastMsg,
    toastType,
    setToastMsg,
    setToastType,
  } = useUserAuth();
  const toastRef = useRef(null);
  useEffect(() => {
    if (toastMsg.length > 0) {
      toastRef.current.style.display = "flex";
    }
    let timerId = setTimeout(() => {
      toastRef.current.style.display = "none";
      setToastMsg("");
      setToastType("");
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [toastMsg, toastType]);

  return (
    <ToastContainer
      ref={toastRef}
      display={toastMsg ? "flex" : "none"}
      toastType={toastType}
    >
      {imgUrl && <Image src={imgUrl} alt="product" />}
      {toastMsg}
      <img
        src="/assets/Icons/cross.svg"
        alt="close"
        onClick={() => (toastRef.current.style.display = "none")}
      />
    </ToastContainer>
  );
}
