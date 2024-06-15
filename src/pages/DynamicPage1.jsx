 import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DynamicPage1 = () => {
  const [data, setData] = useState({});

  const params = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://7683e1485efd0f5c.mokky.dev/Savdo/${params.id}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [params.id]);
  console.log(params);
  return (
    <div>
      <div className="flex justify-between gap-3">
        <h1 className="text-2xl">{data.title}</h1>
        <p className="bg-green-100 text-green-500 px-2 rounded-[20px] text-[15px]">
          Mavjud
        </p>
      </div>
      <hr />
      <div className=" max-w-[1800px] mx-auto p-5 flex justify-between">
        <div>
          <div>
            <div className="flex gap-14">
              <img width={500} src={data.img} alt="" />
              <div>
                <b>Maxsulot haqida qisqacha</b>
                <p>Brand ...................................... {data.brand}</p>
                <p>
                  Material ................................... {data.material}
                </p>
                <p>
                  Og'irligi .................................. {data.ogirligi}
                </p>
                <p className="text-blue-500">Barcha xususiyatlar</p>
              </div>
            </div>
            <br />
            <div>
              <h1>Maxsulot tavsifi</h1>
              <b>Asosiy xususiyatlari</b>
              <div className="grid grid-cols-2">
                <p>
                  <span className="text-gray-500">Brand</span>{" "}
                  .......................... {data.brand}
                </p>
                <p>
                  <span className="text-gray-500">
                    Ishlab chiqaruvchi davlat
                  </span>{" "}
                  .......................... {data.davlat}
                </p>
                <p>
                  <span className="text-gray-500">Model</span>{" "}
                  .......................... {data.material}
                </p>
              </div>
              <br />
              <div>
                <h1 className="">Tavsifi</h1>
                <p>{data.tavsifi}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w">
          <div className="border-2 p-3 rounded-lg">
            <b>{data.price} so'm</b>
            <div className="flex gap-2">
              <button className="bg-yellow-500 px-5 py-3 rounded-lg">
                Savatchaga
              </button>
              <button className="bg-gray-300 px-5 py-3 rounded-lg">
                Birgina click orqali xarid
              </button>
            </div>
          </div>
          <div>
            <b>Muddatli to'lovga</b>
            <div className="flex gap-2">
              <button className="border-2 p-2 focus:border-yellow-500 text-red-500 rounded-md">
                0-0-6
              </button>
              <button className="border-2 p-2 focus:border-yellow-500 text-red-500 rounded-md">
                0-0-12
              </button>
              <button className="border-2 p-2 focus:border-yellow-500 rounded-md">
                12 oy
              </button>
              <button className="border-2 p-2 focus:border-yellow-500 rounded-md">
                24 oy
              </button>
            </div>
            <div className="border-2 p-5 my-3">
              <div className="p-2 flex flex-col items-center border-2 py-5 my-3 rounded-md">
                <p>Anorbank hamkorining muddatli to'lovi</p>
                <div>
                  <div className=" justify-between items-center my-3 flex">
                    <img
                    width={150}
                      src="https://mini-io-api.texnomart.uz/order/order/loan-system/9/d9953ed3-2e7c-4276-a490-9a94540373e0.png"
                      alt=""
                    />
                    <b>287 500 so'm/oy</b>
                    <br />
                  </div>
                  <button className="bg-black text-white py-2 rounded-md px-[100px]">
                    Rasmiylashtirish
                  </button>
                </div>
              </div>
              <div className="p-2 flex flex-col items-center border-2 py-5 my-3 rounded-md">
                <p>Anorbank hamkorining muddatli to'lovi</p>
                <div>
                  <div className=" justify-between items-center my-3 flex">
                    <img
                    width={150}
                      src="https://mini-io-api.texnomart.uz/order/order/loan-system/1/0068a7cc-1393-461a-a1bd-56577fcd4660.png"
                      alt=""
                    />
                    <b>287 500 so'm/oy</b>
                    <br />
                  </div>
                  <button className="bg-black text-white py-2 rounded-md px-[100px]">
                    Rasmiylashtirish
                  </button>
                </div>
              </div>
              <div className="p-2 flex flex-col items-center border-2 py-5 my-3 rounded-md">
                <p>Anorbank hamkorining muddatli to'lovi</p>
                <div>
                  <div className=" justify-between items-center my-3 flex">
                    <img
                    width={140}
                      src="https://mini-io-api.texnomart.uz/order/order/loan-system/11/18f06a4f-c363-4e54-bc9b-636c533f08d7.png"
                      alt=""
                    />
                    <b>287 500 so'm/oy</b>
                    <br />
                  </div>
                  <button className="bg-black text-white py-2 rounded-md px-[100px]">
                    Rasmiylashtirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage1;
