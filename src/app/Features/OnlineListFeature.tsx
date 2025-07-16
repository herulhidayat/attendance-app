import React from "react";
import styled from "styled-components";

export default function OnlineListFeature() {
    const onlineList = [
        {
            name: "Jefri",
            location: "Bintaro",
        },
        {
            name: "Sam",
            location: "BSD",
        },
        {
            name: "Aldo",
            location: "BSD",
        },
        {
            name: "Jasmine",
            location: "WFH",
        },
        {
            name: "Rizky",
            location: "Bintaro",
        },
        {
            name: "Rafi",
            location: "BSD",
        },
        {
            name: "Astri",
            location: "Bintaro",
        },
        {
            name: "Dwiki",
            location: "WFH",
        },
    ]
    return(
        <>
            <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] p-3 w-full">
                <div className="flex gap-0 justify-center">
                    {onlineList.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col items-center gap-1">
                            <Wrapper style={{marginLeft: index === 0 ? "0" : "-0.5rem"}}>
                                <img src="/static/img/avatar.png" alt="face" className="rounded-full border-2 border-white" width={40}/>
                            </Wrapper>
                            <div className="flex flex-col gap-0 items-center">
                                <p className="text-3 font-semibold">{item.name}</p>
                                <p className="text-2">{item.location}</p>
                            </div>
                        </div>
                    ))}
                    <div>
                        <Wrapper style={{marginLeft: "-0.5rem"}}>
                            <div className="badge-plus bg-primary text-white rounded-full border-2 border-white">
                                <p className="text-white text-3 font-semibold text-center">10<br/>more</p>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

const Wrapper = styled.div`
  z-index:1;
  .badge-plus {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`