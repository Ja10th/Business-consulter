import React from "react";
import "./customer.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Customer = () => {
  return (
    <section className="container customer">
      <h2>Customers Review</h2>

      <Swiper
        className="swipper-customer"
        modules={[Pagination]}
        spaceBetween={45}
        slidesPerView={2}
        pagination={{ clickable: true }}>
        <SwiperSlide className="customer-text swipper-text">
          <div className="customers">
            <img
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div>
              <h6>Jenifer howel</h6>
              <p>New York</p>
            </div>
            <p>2 days ago</p>
          </div>
          <div className="cust-back">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Tempore, earum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer-text swipper-text">
          <div className="customers">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div>
              <h6>Matthew Lotur</h6>
              <p>New York</p>
            </div>
            <p>2 days ago</p>
          </div>
          <div className="cust-back">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quibusdam, nemo!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer-text swipper-text">
          <div className="customers">
            <img
              src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/04/15173912-how-to-exfoliate-your-face-dr-barbara-sturm-beauty-expert-skincare-tips_cover_2000x1335.jpg"
              alt=""
            />
            <div>
              <h6>Joana Beth</h6>
              <p>New York</p>
            </div>
            <p>2 days ago</p>
          </div>
          <div className="cust-back">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              eius natus dolorum, blanditiis laboriosam facere. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Rerum, quia!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Customer;
