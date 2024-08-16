import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import LogOut from "./Logout";
import { useState } from "react";
const Userinfo = () => {
  const [open ,setOpen]= useState(false);
  const { currentUser } = useUserStore();

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
      {open&&<LogOut/>}
        <img src="./edit.png" alt="" />
        <img src="./more.png" alt="" onClick={ ()=>setOpen(prev=>!prev)} />
        </div>
    </div>
  )
}

export default Userinfo