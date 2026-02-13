import React, { createContext, useEffect, useState } from "react";


export const StoreContext = createContext();


export const StoreProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

