import React from "react";
import { Button } from "../components";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
const Chat = () => {
  const { handleClick, currentColor } = useStateContext();
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  function closeUserProfile() {
    handleClick(initialState);
  }
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
        <button
          type="button"
          onClick={closeUserProfile}
          className="text-2xl rounded-full p-3 hover:bg-light-gray block text-gray-500"
        >
          <MdOutlineCancel />
        </button>
      </div>
      {chatData.map((chat) => (
        <div className="flex items-center p-1 hover:bg-light-gray cursor-pointer border-b-1 border-color w-full">
          <img
            src={chat.image}
            alt="chat image"
            className="w-12 h-12 rounded-[50%]"
          />
          <div className="ml-4">
            <p className="text-md font-semibold dark:text-white">
              {chat.message}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-200 lowercase">
              {chat.desc}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-200 lowercase">
              {chat.time}
            </p>
            <div className="m-2"></div>
          </div>
        </div>
      ))}
      <Button
        color="white"
        bgColor={currentColor}
        text="All Messages"
        borderRadius="10px"
        size="sm"
        className="w-full mt-4 mb-0"
      />
    </>
  );
};

export default Chat;
