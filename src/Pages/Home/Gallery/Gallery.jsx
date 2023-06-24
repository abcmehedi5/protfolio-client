import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  return (
    <section className="bg-slate-600 py-8 text-center">
      <div className="container mx-auto">

        <h2 className=" uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">
        Our gallery
        </h2>
        <p className="w-3/4 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga iure
          voluptatibus ipsam asperiores maiores consequuntur fugiat! Laboriosam
          assumenda voluptatum soluta non. Reprehenderit ipsum fuga doloribus
          quibusdam! Rerum natus aut blanditiis?
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          // centeredSlides={true}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
