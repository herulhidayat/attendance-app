import { DFlex, DFlexColumn } from "@app/styled/flex.styled";
import { Button } from "flowbite-react";
import React from "react";

export default function AboutMe() {
    return(
        <>
            <div className="container mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x-2">
                    <DFlexColumn className="gap-9 lg:pe-[5rem]">
                        <h2 className="text-9 font-bold" style={{lineHeight: "1.71429rem"}}>About me</h2>
                        <p className="text-6 text-justify" style={{lineHeight: "1.71429rem"}}>Seasoned Frontend Software Engineer with over 2 years of professional experience, Khairul Hidayat specializes in creating dynamic and responsive web applications. He is proficient in using React and Angular frameworks with TypeScript and JavaScript, and has a strong command of styling technologies such as Bootstrap, Sass, and Tailwind. Known for his ability to produce clean and scalable code, Khairul excels in both collaborative team environments and independent projects. A quick learner with an insatiable curiosity for emerging technology trends, he is committed to continuous professional growth and innovation.</p>
                    </DFlexColumn>
                    <DFlexColumn className="gap-9 lg:ps-[5rem]">
                        <h2 className="text-12 font-bold" style={{maxWidth: "41.21428rem", lineHeight: "4.28571rem"}}>Let’s talk together now!</h2>
                        <div>
                            <Button pill size={"sm"}>Contact Me</Button>
                        </div>
                    </DFlexColumn>
                </div>
            </div>
        </>
    )
}