import { createContext, useEffect, useState } from "react";

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [like, setLike] = useState(() => {
    const storeLike = localStorage.getItem("LikeBasket");
    try {
      return storeLike ? JSON.parse(storeLike) : [];
    } catch (error) {
      console.error("Error parsing basket data from localStorage:", error);
      return [];
    }
  });

  const addLike = (card) => {
    if (!like.some((item) => item.id === card.id)) {
      setLike([...like, card]);
    }
  };

  useEffect(() => {
    localStorage.setItem("LikeBasket", JSON.stringify(like));
  }, [like]);

  return (
    <LikeContext.Provider value={{ addLike }}>{children}</LikeContext.Provider>
  );
};

export default LikeProvider;
