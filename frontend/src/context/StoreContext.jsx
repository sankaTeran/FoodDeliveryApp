import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); // createContext method

// create StoreContext function

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removerFromCart = (itemId) => {
    console.log("itemId");

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInFo = food_list.find((product) => product._id === item);
        totalAmount += itemInFo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // create variable
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removerFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider> // useContext hooks
  );
};

export default StoreContextProvider;
