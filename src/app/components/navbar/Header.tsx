import { Button, MegaMenu, Navbar } from "flowbite-react"
import React, { useMemo } from "react"
import styled from "styled-components"
import AppIcon from "../Icons/AppIcon"
import { MenuLeftIcon, MenuRightIcon } from "../Icons/ActiveMenuIcon"
import NotificationIcon from "../Icons/NotificationIcon"
import { useLocation, useNavigate } from "react-router-dom"
import { get } from "lodash"

interface IHeader {
    className?: string
}
export default function Header({ className }: IHeader) {
    const location = useLocation();
    const getLocation = location.pathname;
    const navigate = useNavigate()

    const renderNav = useMemo(() => {
        return(
            <div className={`flex flex-wrap items-center justify-between md:space-x-8 transition-all duration-300 ${className}`}>
                <Navbar.Brand className="text-primary">
                    <img src="/static/logo.png" alt="logo" width={100} />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link href="/home" className={`text-muted hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={getLocation === "/home"} name="Home" />
                    </Navbar.Link>
                    <Navbar.Link href="/attendance" className={`text-muted hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={getLocation === "/attendance"} name="Attendance" />  
                    </Navbar.Link>
                    <Navbar.Link href="/form" className={`text-muted hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={getLocation === "/form"} name="Form" />
                    </Navbar.Link>
                    <Navbar.Link href="/setting" className={`text-muted hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                        <ActiveMenu status={getLocation === "/setting"} name="Setting" />
                    </Navbar.Link>
                </Navbar.Collapse>
                <div onClick={() => {navigate('/notification')}}>
                    <NotificationIcon />
                </div>
            </div>
        )
    }, [className])
    return(
        <HeaderMenu className="px-0 py-5">
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