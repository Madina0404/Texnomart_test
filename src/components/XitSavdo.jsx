import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { XitSavdoContext } from "../context/XitSavdoContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { LikeContext } from "../context/LikeContext";
import Likes from "../pages/Likes";

const XitSavdo = () => {
  const { wrap } = useContext(XitSavdoContext);
  const { addData } = useContext(BasketContext);
  const { addLike } = useContext(LikeContext);
  return (
    <div>
      <h1 className="text-[30px]">Xit savdo</h1>
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
        {wrap?.map((item) => (
          <>
            <div>
              <div className="flex" key={item.id}>
                <SwiperSlide>
                  <div className=" border-2 p-2 rounded-2xl">
                    <div className="flex justify-between">
                      <p className="bg-green-500 px-2 rounded-md text-white">
                        0*0*12
                      </p>
                      <Link to={<Likes/>}>
                        <img
                          onClick={() => addLike(item)}
                          style={{ width: "20px" }}
                          src="https://texnomart.uz/_nuxt/img/like.e6bfe0f.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <Link to={`/XitSavdo/${item.id}`}>
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
                      <div onClick={() => addData(item)} className="w-[30px]">
                        <img
                          className=" border-2 cursor-pointer rounded-lg  border-yellow-400"
                          src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-12-1024.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default XitSavdo;
