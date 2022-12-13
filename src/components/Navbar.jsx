import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-half-transparent"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-"
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    toggleActiveMenu,
    activeActiveMenu,
    disableActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      activeActiveMenu();
    } else {
      disableActiveMenu();
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFunc={toggleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-half-transparent rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="user image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-gray-400 text-14">
              Hi,<span className="ml-1 font-bold text-blue-400"> John</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {(
          isClicked.chat ||
          isClicked.notification ||
          isClicked.userProfile) && (
          <div className="nav-item absolute right-1 top-16 bg-white dark:bg-main-dark-bg dark:text-gray-200 rounded-xl p-6 w-96 drop-shadow-lg">
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
