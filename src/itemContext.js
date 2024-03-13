import React, { createContext, useState, useContext } from "react";
import CartModal from "./components/cardModel/cardModel";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]); 
  const [showCart, setShowCart] = useState(false);
  const [total , setTotal] =useState(0);

  const handleBuy = (item) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item }]);
      setValue(value + 1);
      setTotal(total + item.price);
    } else {
      cart.splice(index, 1);
      setCart([...cart]);
      setValue(value - 1);
      setTotal(total - item.price);
    }
  };


  const toggle = () => {
    setShowCart(!showCart);
  };

  const close = () => {
    setShowCart(false);
  };

  return (
    <itemContext.Provider
      value={{ handleBuy, cart, toggle, close, value, total }}>
      {cart.length > 0 && showCart && <CartModal cart={cart} toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export default CustomItemContext;
export { useValue }; 