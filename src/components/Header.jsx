import "../index.css";
import burgerMenu from "../assets/icons/burgerMenu.svg";
import cres from "../assets/icons/cres.svg";
import like from "../assets/icons/like.svg";
import Karzinka from "../assets/icons/basket.svg";
import location from "../assets/icons/location.svg";
import LoginButton from "../routes/privateRoutes";
import { useContext, useState } from "react";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";

const Header = () => {
  const [state, setState] = useState(false);
  const {basket} = useContext(BasketContext)

  return (
    <div className=" sticky top-0 z-20 bg-white">
      <div className=" flex items-center justify-between py-[40px] gap-2  bg-wh z-20">
        <a href="">
          <img
            className="w-[250px] hidden 2xl:block"
            src="https://texnomart.uz/_nuxt/img/texnomart-logo.fcda25c.svg"
            alt="error"
          />
        </a>

        <div className="flex items-center justify-between">
          <div className="md:flex items-center hidden 2xl:hidden">
            <img width={20} src={location} alt="" />
            <select className="bg-white outline-none" name="" id="">
              <option className="bg-white">XORAZM</option>
              <option className="bg-white">BUXORO</option>
              <option className="bg-white">SAMARKAND</option>
              <option className="bg-white">QORAQALPOGISTON</option>
              <option className="bg-white">TOSHKENT</option>
              <option className="bg-white">FARGONA</option>
              <option className="bg-white">NAMANGAN</option>
              <option className="bg-white">QASHQADARYO</option>
              <option className="bg-white">NAVOIY</option>
            </select>
          </div>
          <div className="flex items-center md:hidden xl:hidden p-2">
            <img width={20} src={location} alt="" />
            <select className=" outline-none" name="" id="">
              <option>XORAZM</option>
              <option>BUXORO</option>
              <option>SAMARKAND</option>
              <option>QORQALPOGISTON</option>
              <option>TOSHKENT</option>
              <option>FARGONA</option>
              <option>NAMANGAN</option>
              <option>QASHQADARYO</option>
              <option>NAVOIY</option>
            </select>
          </div>
          <div className="hidden md:block">
            <p className="xl:hidden">+998 88 511 27 11</p>
          </div>
        </div>

        <div className="flex gap-3 transition-all">
          <div
            onClick={() => setState(!state)}
            className="bg-yellow-500 transition-all lg:w-[120px] text-15px gap-2 p-2 flex items-center rounded-xl"
          >
            <button className="hidden lg:block">Каталог</button>
            {state ? (
              <div className="flex flex-col">
                <img id="cres" className="w-[30px] qres" src={cres} alt="" />
              </div>
            ) : (
              <img
                id="burgerMenu"
                className="w-[30px]"
                src={burgerMenu}
                alt=""
              />
            )}
          </div>
          <Search />
        </div>
        <div className="2xl:flex gap-4 hidden">
          <div className="logIn">
            <LoginButton />
          </div>
          <div className="flex flex-col items-center">
            <img width={20} src={like} alt="" />
            <b className="">Избранное</b>
          </div>
          <div className="flex flex-col items-center">
            <NavLink to={"/Karzinka"}>
              <div className=" flex flex-col items-center">
                <div className=" flex">
                  <img width={20} src={Karzinka} alt="" />
                  <p className="bg-yellow-500 w-[20px] h-[20px]  rounded-[150px] text-center  relative bottom-3">{basket.length}</p>
                </div>
                <b className="">Корзина</b>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        {state ? (
          <div className="relative ">
            <div></div>
          </div>
        ) : (
          <h1> </h1>
        )}
      </div>
    </div>
  );
};

export default Header;
