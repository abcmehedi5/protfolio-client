import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  const slideImage = [
    {
      _id: "1",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      _id: "2",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      _id: "4",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      _id: "3",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      _id: "5",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      _id: "6",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
  ];

  return (
    <section
      className="bg-slate-600 py-8 text-center"
    >
      <div className="container mx-auto" data-aos="flip-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="2000">
        <h2 className=" uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">
          Our gallery
        </h2>
        <p className="w-3/4 mx-auto">
          Explore our captivating gallery showcasing stunning visuals and
          creative designs. Get inspired and discover the possibilities for your
          next project.
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
          {slideImage.map((img) => (
            <SwiperSlide>
              <img className="w-full h-[200px]" src={img.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
