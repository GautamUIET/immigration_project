import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/stylesNavigation.css';    

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className=''> 
                <div className='flex flex-col gap-6 items-center justify-center'> 
                    <span className='text-4xl text-[#155da9]'>Harpreet Singh</span>
                    <span className='w-[500px] text-center text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis. Ipsum aut esse illum repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem. facilis, eos itaque sit iusto!</span>   
                    <span></span>
                </div>

        </SwiperSlide>
        <SwiperSlide><div className='flex flex-col gap-6 items-center justify-center'> 
                    <span className='text-4xl text-[#155da9]'>Shourya Agarwal</span>
                    <span className='w-[500px] text-center text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis. Ipsum aut esse illum repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem. facilis, eos itaque sit iusto!</span>   
                    <span></span>
                </div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}