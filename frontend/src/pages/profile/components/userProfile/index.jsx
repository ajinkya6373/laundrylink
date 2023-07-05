import { useState } from "react";
import { InputBox } from "../../../../components";
import { ProfileWrapper } from "./profile";
import { useAuth } from "../../../../hooks";
import { useUserAuth } from "../../../../context";

export default function UserProfile() {
  const [edit, setEdit] = useState(false);
  const {logUserOut} = useAuth()
  const {userProfile:{email,username}} = useUserAuth()
  const ClickHandler =()=>{
    if(!edit){
      logUserOut()
    }
  }

  return (
    <ProfileWrapper>
      <div onClick={() => setEdit(!edit)}>
        <img src="/assets/Icons/edit.svg" alt="edit icons" />
        <span> Edit profile</span>
      </div>
      <InputBox
        type="text"
        placeholder={username}
        name="name"
        id="name"
        label="Name"
        disabled={!edit}
      />
      <InputBox
        type="email"
        placeholder={email}
        name="name"
        id="email"
        label="Email"
        disabled={!edit}
      />
      <button onClick={ClickHandler}>{edit ? "Save" : "Sign out"} </button>
    </ProfileWrapper>
  );
}
