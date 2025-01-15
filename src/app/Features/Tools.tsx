import { DFlex } from "@app/styled/flex.styled";
import React from "react";
import styled from "styled-components";

export default function Tools() {
    return(
        <div className="container mx-auto px-5">
            <div className="flex gap-8 justify-center items-center">
                <span className="md:text-6 text-5 font-bold text-muted">Experienced with:</span>
                <ScrollFlex className="gap-8 overflow-x-auto">
                    <img src="/static/img/reactjs.svg" alt="react" />
                    <img src="/static/img/angular.svg" alt="angular" />
                    <img src="/static/img/typescript.svg" alt="typescript" />
                    <img src="/static/img/bootstrap.svg" alt="bootstrap" />
                    <img src="/static/img/sass.svg" alt="sass" />
                </ScrollFlex>
            </div>
        </div>
    )
}

const ScrollFlex = styled(DFlex)`
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`