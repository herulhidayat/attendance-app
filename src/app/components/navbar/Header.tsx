import { DFlexJustifyBetween } from "@app/styled/flex.styled"
import { MegaMenu, Navbar } from "flowbite-react"
import React from "react"
import styled from "styled-components"
import AppIcon from "../Icons/AppIcon"

export default function Header() {
    return(
        <HeaderMenu>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between py-8 md:space-x-8">
                    <Navbar.Brand className="text-primary">
                        <AppIcon />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Navbar.Link className={`border-2 border-primary border-y-transparent rounded-full px-4 py-2 cursor-pointer uppercase`}>Home</Navbar.Link>
                        <Navbar.Link className={`hover:text-primary cursor-pointer uppercase`}>Works</Navbar.Link>
                    </Navbar.Collapse>
                    <div>
                        <p>+628 123 456 789</p>
                    </div>
                </div>
            </div>
        </HeaderMenu>
    )
}

const HeaderMenu = styled(MegaMenu)`
    .menu-nav{
        &.active{
            border-radius: 50%;
            border-right: 2px solid bg-primary;
            border-left: 2px solid bg-primary;
        }
        &:hover{
            border-radius: 50%;
            border-right: 2px solid bg-primary;
            border-left: 2px solid bg-primary;
        }
    }
`