import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const KarzinkaProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("KarzinkaProduct")) || []
console.log(storage);
  const [basket, setBasket] = useState(storage);

     const addData = (product) => {
       let check = basket.some((item) => item.id === product.id);
       if (!check) {
         let newData = [...basket, product];
         setBasket(newData);
       }
     };
  
 

  const removeData = (id) => {
    const newData = basket.filter((item) => item.id !== id);
    setBasket(newData);
  };

  useEffect(() => {
    localStorage.setItem("KarzinkaProduct", JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ addData, removeData, basket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default KarzinkaProvider;
