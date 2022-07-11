import React from "react";
import "./whyus.css";
import { GiCandleFlame } from "react-icons/gi";
import { GiProtectionGlasses } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Whyus = () => {
  return (
    <section className="whyus">
      <div className="whyus__container">
        <div className="whyus__title">
          <h2>Why Choose Us</h2>
          <p>
            There is some reason behind why people choose Triumph past 20 years
            for their business solutions. Please find our unique qualification
            and our highlights.
          </p>
        </div>
        <Swiper
          className="swipper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide className="swipper-text">
            <GiCandleFlame className="swipper-icon" />
            <div className="icon-back"><h5>Vibrant</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere.
            </p></div>
          </SwiperSlide>
          <SwiperSlide className="swipper-text">
            <AiOutlineProject className="swipper-icon" />
            <div className="icon-back">
            <h5>Professional</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere.
            </p></div>
          </SwiperSlide>
          <SwiperSlide className="swipper-text">
            <GiProtectionGlasses className="swipper-icon" />
            <div className="icon-back">
            <h5>Experience</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere.
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Whyus;
