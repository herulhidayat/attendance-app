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
                        <p className="text-6 text-justify" style={{lineHeight: "1.71429rem"}}>Experienced Frontend Developer with over 3 years of experience in web development and over 1 year of experience in React JS. Skilled at creating visually appealing and responsive user interfaces, debugging and troubleshooting web applications. Have an understanding of web development principles, including user experience and accessibility. I am always eager to learn new technologies and stay up-to-date with the latest trends in the industry. My goal is to create visually appealing and user-friendly websites that deliver an exceptional experience to users.</p>
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