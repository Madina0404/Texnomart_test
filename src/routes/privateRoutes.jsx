import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import user from "../assets/icons/user.svg";
import cres from "../assets/icons/cres.svg";

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    setShowModal(true);
    e.preventDefault();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (

    <div className=" z-40">
      {showModal && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] transition-all">
          <div className="card p-3 flex flex-col items-center absolute w-[300px] bg-white z-20 transition-all  border-2 border-yellow-400">
            <div>
              <button className="text-red-500" onClick={handleClose}>
                <img src={cres} alt="" />
              </button>
              <h1 className="text-[20px] text-center text-bold">
                Кириш ёки рўйхатдан ўтиш
              </h1>
            </div>
            <label htmlFor="phone">Telefon raqamingiz:</label>
            <input
              className="border-2 mx-2 p-2 outline-yellow-500 rounded-sm w-[250px]"
              type="text"
              id="phone"
              placeholder="+998-11-222-33-44"
              />
            <button className="bg-yellow-500 my-3 rounded-md px-[47px] py-2 w-[250px]">
              Кодни олиш
            </button>
            <NavLink className="text-blue-500" to="/">
              Логин орқали кириш
            </NavLink>
          </div>
        </div>
      )}
      <div
        onClick={handleLogin}
        className="flex flex-col items-center transition-all"
        >
        <img className="w-[20px] " src={user} alt="" />
        <b className="cursor-pointer">Вход</b>
      </div>
    </div>
  );
};

export default LoginButton;
