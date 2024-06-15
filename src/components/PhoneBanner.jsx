import React from "react";

const PhoneBanner = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-3xl px-[200px]">
      <img src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="" />
      <div>
        <h1 className="text-[35px]">Ilovani yuklang</h1>
        <p>
          Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
        </p>
        <div className="flex items-center gap-[30px] my-3">
          <img
          width={100}
            src="https://texnomart.uz/_nuxt/img/app-qr-code-2x.6c90f4e.png"
            alt=""
          />
          <p className="text-[20px] ">Kamerani yo`naltiring va <br /> Texnomart ilovasini bepul yuklang</p>
        </div>
        <div className="flex gap-5">
          <img src="https://texnomart.uz/_nuxt/img/googleplay-uz.fa5705f.svg" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/appstore-uz.ef31779.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhoneBanner;
