import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/productsContext";
import { BasketContext } from "../context/BasketContext";

const Products = () => {
  const { statee } = useContext(ProductContext);
  const { addData } = useContext(BasketContext);
  return (
    <div>
      <h1 className="text-[30px]">Yangi mahsulotlar</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {statee?.map((item) => (
          <SwiperSlide>
            <div className=" border-2 p-2 rounded-2xl">
              <div className="flex justify-between">
                <p className="bg-green-500 px-2 rounded-md text-white">
                  0*0*12
                </p>
                <img
                  style={{ width: "20px" }}
                  src="https://texnomart.uz/_nuxt/img/like.e6bfe0f.svg"
                  alt=""
                />
              </div>
              <Link to={`/Products/${item.id}`}>
                <div className=" py-3 px-2 rounded-2xl">
                  <div className="h-[300px] overflow-hidden">
                    <img className="object-cover" src={item.img} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <br />
                  <br />
                  <button className="bg-gray-100 px-2 rounded-xl">
                    {item.oy1} somdan/24 oy
                  </button>
                  <br />
                  <button className="bg-yellow-100 px-2 rounded-xl">
                    {item.oy2} som 0*0*12
                  </button>
                  <br />
                  <br />
                </div>
              </Link>
              <div className="flex justify-between">
                <b>{item.price}</b>
                <div onClick={()=>addData(item)} className="w-[30px]">
                  <img
                    className=" border-2 rounded-lg cursor-pointer border-yellow-400"
                    src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-12-1024.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
