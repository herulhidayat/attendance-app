import { Button, MegaMenu, Navbar } from "flowbite-react"
import React from "react"
import styled from "styled-components"
import AppIcon from "../Icons/AppIcon"
import { MenuLeftIcon, MenuRightIcon } from "../Icons/ActiveMenuIcon"

export default function Header() {
    return(
        <HeaderMenu>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between py-8 md:space-x-8">
                    <Navbar.Brand className="text-primary">
                        <AppIcon />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Navbar.Link className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                            <ActiveMenu status={true} name="Home" />
                        </Navbar.Link>
                        <Navbar.Link className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                            <ActiveMenu status={false} name="Works" />  
                        </Navbar.Link>
                        <Navbar.Link className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                            <ActiveMenu status={false} name="Experience" />
                        </Navbar.Link>
                        <Navbar.Link className={`text-secondary hover:text-primary cursor-pointer uppercase font-bold flex items-center`}>
                            <ActiveMenu status={false} name="Info" />
                        </Navbar.Link>
                    </Navbar.Collapse>
                    <div>
                        <Button pill size={"sm"}>Contact Me</Button>
                    </div>
                </div>
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
        return name
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