import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { user, userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const UserProfile = () => {
  const { handleClick } = useStateContext();
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
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={closeUserProfile}
          className="text-2xl rounded-full p-3 hover:bg-light-gray block text-gray-500"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center border-b-1 border-color py-2">
        <img
          src={user.avatar}
          alt="user image"
          className="w-24 h-24 rounded-[50%]"
        />
        <div className="p-4 ml-8">
          <p className="font-semibold dark:text-white text-xl">
            {user.userName}
          </p>
          <p className="text-gray-600 dark:text-gray-200">{user.role}</p>
          <p className="font-semibold text-gray-600 dark:gray-200">
            {user.email}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((card) => (
          <div className="flex items-center p-4 hover:bg-light-gray cursor-pointer border-b-1 border-color">
            <div className="p-4 rounded-md text-xl" style={{color: card.iconColor,backgroundColor: card.iconBg }}>
            {card.icon}
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold dark:text-white">{card.title}</p>
              <p className="text-md text-gray-500 dark:text-gray-200 lowercase">{card.desc}</p>
            </div>
            <hr className="m-2" />
          </div>

        ))}
      </div>
    </>
  );
};

export default UserProfile;
