import React from "react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectHistory() {
    const listHistoryProject = [
        {
            name: 'Massive Profiling',
            image: '/static/img/project/massive-profiling.png'
        },
        {
            name: 'Open Data Sumut',
            image: '/static/img/project/sadaina.png'
        },
        {
            name: 'IMA',
            image: '/static/img/project/ima.png'
        },
        {
            name: 'Profiling Economy',
            image: '/static/img/project/economy.png'
        },
    ]
    return(
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-8 items-center">
            <h2 className="text-12 font-bold text-center" style={{maxWidth: "41.21428rem", lineHeight: "4.28571rem"}}>Projects that have been worked on</h2>
            <p className="text-8 text-center" style={{maxWidth: "65rem", lineHeight: "1.71429rem"}}>We have successfully developed a wide range of websites, whether working independently or as part of large, collaborative teams, consistently delivering high-quality, scalable, and user-friendly solutions that meet client requirements and exceed expectations.</p>
            <div className="w-full px-5">
                <SwiperCustom
                    spaceBetween={10}
                    breakpoints={{
                        540: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1360: {
                          slidesPerView: 3,
                        },
                        1500: {
                          slidesPerView: 4,
                        },
                        1700: {
                          slidesPerView: 4,
                        },
                      }}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    modules={[Autoplay]}
                    className="swiper-event"
                >
                    {
                        [...listHistoryProject].map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="hover:border-primary hover:border-2 hover:border-opacity-20 rounded-xl">
                                <img src={item.image} alt={item.name} width={456} />
                              </div>
                            </SwiperSlide>
                        ))
                    }
                </SwiperCustom>
            </div>
        </div>
      </div>
    )
}

const SwiperCustom = styled(Swiper)`
    width: 100%;
  &.swiper {
    width: 100% !important;
  }
`