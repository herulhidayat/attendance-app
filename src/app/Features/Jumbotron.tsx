import GitIcon from "@app/components/Icons/GitIcon";
import LinkedInIcon from "@app/components/Icons/LinkedInIcon";
import React from "react";

export default function Jumbotron() {
    return(
        <>
            <div className="container mx-auto">
                <div className="relative w-full" style={{height: "calc(100vh - 23.92857rem)"}}>
                    <div className="mx-auto flex justify-between items-center">
                        <div style={{maxWidth: "35rem"}}>
                            <span className="text-15 font-bold">Hey everyone, I’m ...</span>
                        </div>
                        <div style={{maxWidth: "23rem"}}>
                            <span className="text-8 font-normal">Specializes in creating dynamic
                            and responsive web applications.</span>
                        </div>
                    </div>
                    <div className="mx-auto flex justify-between items-center">
                        <div style={{maxWidth: "35rem"}} className="text-8 font-normal">
                            <p>a <span className="font-bold">Frontend Software Engineer</span></p>
                            <p>with over 2 years of professional experience</p>
                        </div>
                        <div className="flex text-primary gap-3">
                            <LinkedInIcon />
                            <GitIcon />
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <img src="/assets/img/profile.png" alt="hero" width={1024} />
                    </div>
                </div>
            </div>
        </>
    )
}