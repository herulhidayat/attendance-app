import GitIcon from "@app/components/Icons/GitIcon";
import LinkedInIcon from "@app/components/Icons/LinkedInIcon";
import React from "react";

export default function Jumbotron() {
    return(
        <>
            <div className="container mx-auto px-5">
                <div className="relative w-full" style={{height: "calc(100vh - 23.92857rem)"}}>
                    <div className="mx-auto flex lg:flex-row flex-col justify-between lg:items-center">
                        <div className="lg:max-w-[35rem]">
                            <span className="sm:text-15 text-13 font-bold">Hey everyone, I’m ...</span>
                        </div>
                        <div className="max-w-[23rem] max-lg:hidden">
                            <span className="md:text-8 text-6 font-normal">Specializes in creating dynamic
                            and responsive web applications.</span>
                        </div>
                    </div>
                    <div className="mx-auto flex lg:flex-row flex-col justify-between lg:items-center max-lg:gap-3 max-lg:mt-3">
                        <div style={{maxWidth: "35rem"}} className="md:text-8 text-7 font-normal">
                            <p>a <span className="font-bold">Frontend Software Engineer</span></p>
                            <p>with over 2 years of professional experience</p>
                        </div>
                        <div className="lg:hidden">
                            <span className="md:text-8 text-7 font-normal">Specializes in creating dynamic
                            and responsive web applications.</span>
                        </div>
                        <div className="flex text-primary gap-3">
                            <LinkedInIcon />
                            <GitIcon />
                        </div>
                    </div>
                    <div className="sm:absolute sm:bottom-0 w-full flex justify-center lg:px-32">
                        <img src="/static/img/profile.png" alt="hero" width={1024} />
                    </div>
                </div>
            </div>
        </>
    )
}