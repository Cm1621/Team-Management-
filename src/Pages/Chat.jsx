import React from "react";
import Sidebar from "../Components/ProjectManager/Sidebar";
import ChatSidebar from "../Components/ProjectManager/Chat/ChatSidebar";
import ChatWindow from "../Components/ProjectManager/Chat/ChatWindow";

const Chat = () => {

  return (
   <div className="flex h-screen w-full bg-green-900 text-neutral-50">
    <Sidebar/>
    <ChatSidebar/>
    <ChatWindow/>
   </div>
  )
};




export default Chat;