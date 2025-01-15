import { SwiperCustom } from "@app/styled/swiper.styled";
import { Card } from "flowbite-react";
import React from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

export default function Experienced() {
    const listVisualization = [
        {
            name: 'Chart',
            desc: 'Expreienced creating charts with Echart and Highchart',
            image: '/static/img/experience/chart.png'
        },
        {
            name: 'Graph',
            desc: 'Expreienced creating network graph with ogma',
            image: '/static/img/experience/graph.png'
        },
        {
            name: 'Map',
            desc: 'Expreienced creating map with mapbox',
            image: '/static/img/experience/map.png'
        },
    ]
    return(
        <>
            <div className="container mx-auto">
                <div className="flex flex-col gap-8 items-center">
                    <h2 className="text-12 font-bold text-center" style={{maxWidth: "41.21428rem", lineHeight: "4.28571rem"}}>Experienced in creating data visualizations</h2>
                    <p className="text-8 text-center" style={{maxWidth: "65rem", lineHeight: "1.71429rem"}}>With two years of experience in visualizing various types of data into charts, maps, graphs, and more, making the information easier to interpret and understand.</p>
                    <div className="flex content-center">
                        <SwiperCustom
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            //   clickable: true,
                            }}
                            autoplay={{ delay: 2000, reverseDirection: true }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="swiper_container"
                        >
                            {
                                listVisualization.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="p-5 rounded-2xl shadow-xl bg-[#E3E4E5] flex flex-col items-start justify-between gap-5">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-7 font-bold">{item.name}</p>
                                                <p className="text-6">{item.desc}</p>
                                            </div>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </SwiperCustom>
                    </div>
                </div>
            </div>
        </>
    )
}