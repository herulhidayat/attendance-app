import { DFlex, DFlexColumn, DFlexJustifyBetween } from "@app/styled/flex.styled";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewsFeature() {
    const listContent = [
        {
            username: "Ana Riswati",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            created_at: "2023-01-01",
        },
        {
            username: "Ana Riswati",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            created_at: "2023-01-01",
        },
        {
            username: "Ana Riswati",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            created_at: "2023-01-01",
        },
    ]

    return (
        <div className="p-0">
            <DFlexColumn>
                <SwiperCustom
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={true}
                    scrollbar={false}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    className="swiper-event p-3 container px-5"
                >
                    {listContent.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] p-3">
                                <DFlexJustifyBetween className="mb-3">
                                    <DFlex>
                                        <img src="/static/img/avatar.png" alt="face" className="rounded-full border-2 border-white" width={40}/>
                                        <p className="text-4 font-bold text-primary">{item.username}</p>
                                    </DFlex>
                                    <div className="flex flex-col items-end">
                                        <p className="text-4">{moment(item.created_at).format("dddd")}</p>
                                        <p className="text-4">{moment(item.created_at).format("DD MMMM YYYY")}</p>
                                    </div>
                                </DFlexJustifyBetween>
                                <p className="text-4">{item.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperCustom>
            </DFlexColumn>
        </div>
    )
}

const SwiperCustom = styled(Swiper)`
  &.swiper {
    z-index: 0 !important;
    width: 100% !important;

    .swiper-pagination-bullet-active {
      background-color: var(--black) !important;
    }
    .swiper-pagination-bullet {
      background-color: transparent;
      border: 1px solid var(--black);
      opacity: 1;
    }
  }
`