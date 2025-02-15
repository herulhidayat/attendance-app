import { Button, MegaMenu, Navbar } from "flowbite-react"
import React, { useMemo } from "react"
import styled from "styled-components"
import AppIcon from "../Icons/AppIcon"
import { MenuLeftIcon, MenuRightIcon } from "../Icons/ActiveMenuIcon"

interface IHeader {
    className?: string
    navState?: string
}
export default function Header({ className="py-8", navState }: IHeader) {
    const renderNav = useMemo(() => {
        console.log(navState)
        return(
            <div className={`flex flex-wrap items-center justify-between md:space-x-8 transition-all duration-300 ${className}`}>
                <Navbar.Brand className="text-primary">
                    <AppIcon />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={navState === ""} name="Home" />
                    </Navbar.Link>
                    <Navbar.Link href="#works" className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={navState === "works"} name="Works" />  
                    </Navbar.Link>
                    <Navbar.Link href="#experiences" className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={navState === "experiences"} name="Experience" />
                    </Navbar.Link>
                    <Navbar.Link href="#info" className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={navState === "info"} name="Info" />
                    </Navbar.Link>
                </Navbar.Collapse>
                <div>
                    <Button pill size={"sm"}>Contact Me</Button>
                </div>
            </div>
        )
    }, [navState, className])
    return(
        <HeaderMenu>
            <div className="container mx-auto px-5">
                {renderNav}
            </div>
        </HeaderMenu>
    )
}

const ActiveMenu = ({status, name}: {status: boolean, name: string}) => {
    if(status){
        return(
            <div className="flex items-center text-primary gap-3">
                <MenuLeftIcon />
                {name}
                <MenuRightIcon />
            </div>
        )
    } else {
        return (
            <>{name}</>
        )
    }
}

const HeaderMenu = styled(MegaMenu)`
    background-color: transparent;
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