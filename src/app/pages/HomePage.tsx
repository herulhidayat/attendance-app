import NineClockIcon from "@app/components/Icons/NineClockIcon";
import SixClockIcon from "@app/components/Icons/SixClockIcon";
import AttendanceStatusFeature from "@app/Features/AttendanceStatusFeature";
import NewsFeature from "@app/Features/NewsFeature";
import OnlineListFeature from "@app/Features/OnlineListFeature";
import { DFlex, DFlexColumn, DFlexJustifyBetween } from "@app/styled/flex.styled";
import { Title } from "@app/styled/typography.styled";
import { Card } from "flowbite-react";
import React from "react";

export default function HomePage() {
  return(
    <>
      <div className="container mx-auto px-5">
        <h3 className="mb-3 text-5 font-semibold">Hi, Good Morning!</h3>
      </div>

      <section className="mb-3 container mx-auto px-5">
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-600 text-white shadow-lg">
          <DFlexColumn>
            <div className="flex justify-between w-full">
              <div className="flex items-start gap-3">
                <img src="/static/img/avatar.png" alt="face" className="rounded-full" width={50}/>
                <DFlexColumn style={{gap: 0}}>
                  <p className="font-bold text-5">Khairul Hidayat</p>
                  <p className="text-4 italic">Frontend</p>
                </DFlexColumn>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-4 italic">Member since</p>
                <p className="font-bold text-5">1 Juni 2021</p>
              </div>
            </div>
            <div className="flex justify-between w-full items-end">
              <div className="flex flex-col">
                <p className="text-4">Location</p>
                <p className="font-bold text-5">Kantor Sahid</p>
              </div>
              <p className="text-5 italic">ICO</p>
            </div>
          </DFlexColumn>
        </div>
      </section>

      <section className="mb-3 container mx-auto px-5">
        <Title className="mb-3">{"Today\'s activity"}</Title>
        <AttendanceStatusFeature />
      </section>

      <section className="mb-3">
        <div className="container mx-auto px-5">
          <Title>{"PCS News"}</Title>
        </div>
        <NewsFeature />
      </section>

      <section className="mb-3 container mx-auto px-5">
        <Title className="mb-3">{"Online"}</Title>
        <OnlineListFeature />
      </section>
    </>
  )
}