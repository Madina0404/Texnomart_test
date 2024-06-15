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
      <div>
        {basket?.map((item) => (
          <div key={item.id} className="flex items-center gap-5 mb-7">
            <input
              className="w-[30px] h-[20px] accent-yellow-500 bg-yellow-500 text-yellow-500"
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
      <div>
        <div className=" border px-4 rounded-2xl py-3 mb-6">
          <h1 className="text-[25px]">Jami</h1>
          <div className="flex justify-between gap-3">
            <p> ta mahsulot narxi</p>
            <b> so'm</b>
          </div>
          <button className="bg-yellow-500 text-xl px-10 py-3 rounded-2xl">
            Xaridni rasmiylashtiri
          </button>
        </div>
        <div className=" border px-4 rounded-2xl py-3 flex flex-col">
          <p className=" bg-gray-100 px-3 rounded-md mb-3">
            Muddatli to'lov <b> 320 890</b> so'm / 24 oy
          </p>
          <button className=" bg-black text-white px-10 py-3 rounded-2xl">
            Muddatli to'lov uchun
          </button>
        </div>
      </div>
    </div>
  );
};

export default Karzinka;
