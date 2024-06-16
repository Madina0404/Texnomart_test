import React, { useContext, useEffect, useState } from "react";
import { XitSavdoContext } from "../context/XitSavdoContext";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Karzinka = () => {
  const { basket, removeData } = useContext(BasketContext);

  const [itemCounts, setItemCounts] = useState({});

  useEffect(() => {
    setItemCounts(
      basket.reduce((counts, item) => ({ ...counts, [item.id]: 1 }), {})
    );
  }, [basket]);

  const plus = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };

  const minus = (itemId) => {
    if (itemCounts[itemId] > 1) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

  return (
    <div className="flex  justify-between px-3">
      {basket.length === 0 ? (
        <div className="text-center flex flex-col items-center justify-center mx-auto">
          <img
            src="https://texnomart.uz/_nuxt/img/shopping-card.24c7f25.svg"
            alt=""
          />
          <h1 className=" text-[25px] w-[300px] my-5">
            Саватчада хозирда ҳеч нима йўқ
          </h1>
          <a href="/">
            <button className="border-2 border-yellow-500 text-xl px-4 rounded-[5px] mb-5">
              Xarid qilish
            </button>
          </a>
        </div>
      ) : (
        <div>
          {basket?.map((item) => (
            <div key={item.id} className="flex items-center gap-5 mb-7">
              <input
                className="w-[30px] h-[20px] accent-yellow-500 bg-yellow-500 p-2 text-yellow-500"
                type="checkbox"
              />
              <Link to={`/XitSavdo/${item.id}`}>
                <Link to={`/Products/${item.id}`}>
                  <img width={100} src={item.img} alt="" />
                </Link>
              </Link>
              <p>{item.title}</p>
              <div className="flex items-center gap-[20px]  bg-gray-100 px-2 rounded-lg">
                <button onClick={() => plus(item.id)}>+</button>
                <p>{itemCounts[item.id]}</p>
                <button onClick={() => minus(item.id)}>-</button>
              </div>
              <b className="text-[20px]">{item.price}</b>
              <div className="flex flex-col gap-[30px]">
                <img
                  className=" cursor-pointer"
                  src="https://texnomart.uz/_nuxt/img/like-default.676d647.svg"
                  alt="error"
                />
                <img
                  className=" cursor-pointer"
                  onClick={() => removeData(item.id)}
                  src="https://texnomart.uz/_nuxt/img/basket.73732b8.svg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Karzinka;
