import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
const Cart = () => {
  const { handleClick } = useStateContext();
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  function closeNavbarOptions() {
    handleClick(initialState);
  }
  return (
    <div className="w-screen bg-half-transparent fixed top-0 right-0 z-20">
      <div
        className="float-right h-screen w-400 dark:text-gray-200 
      bg-white dark:bg-main-dark-bg p-8"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg dark:text-gray-200">
            Shopping Cart
          </p>
          <button
            type="button"
            onClick={closeNavbarOptions}
            className="text-2xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-half-transparent block text-gray-500"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((cart) => (
          <div className="flex items-center p-2 hover:bg-light-gray dark:hover:bg-half-transparent cursor-pointer border-b-1 border-color w-full">
            <img
              src={cart.image}
              alt="chat image"
              className="w-16 h-16 rounded-[50%]"
            />
            <div className="p-4 ml-8">
              <p className="font-semibold dark:text-white text-lg">
                {cart.name}
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-md">
                {cart.category}
              </p>
              <p className="font-semibold text-gray-600 dark:gray-200 text-md">
                {cart.price} $
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
