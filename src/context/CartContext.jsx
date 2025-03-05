// src/context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Инициализируем состояние корзины данными из localStorage или пустым массивом
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Каждый раз, когда cart меняется, сохраняем его в localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, count) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + count }
            : item
        );
      }
      return [...prevCart, { ...product, count }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartItemCount = (productId, newCount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            if (newCount < 1) {
              // Если количество становится меньше 1, товар удаляем
              return null;
            }
            return { ...item, count: newCount };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
