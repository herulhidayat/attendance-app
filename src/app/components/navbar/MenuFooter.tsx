import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../Icons/Home";
import AttendanceIcon from "../Icons/AttendanceIcon";
import FormIcon from "../Icons/FormIcon";
import SettingIcon from "../Icons/SettingIcon";
import { DFlexJustifyBetween } from "@app/styled/flex.styled";
import CheckInIcon from "../Icons/CheckInIcon";
import CheckInOutFeature from "@app/Features/CheckInOutFeature";

interface IActiveMenu {
    className?: string;
}
export default function MenuFooter({ className }: IActiveMenu) {
    const location = useLocation();
    const getLocation = location.pathname;
    return(
        <>
            <div className="w-full py-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-white">
                <div className={`container mx-auto px-5 w-full md:space-x-8 transition-all duration-300 ${className}`}>
                    <DFlexJustifyBetween className="w-full">
                        <NavLink to="/home" className={`text-muted w-full hover:text-primary cursor-pointer font-bold text-4 flex items-center`}>
                            <ActiveMenu status={getLocation === "/home"} name="Home" icon={<HomeIcon />} />
                        </NavLink>
                        <NavLink to="/attendance" className={`text-muted w-full hover:text-primary cursor-pointer font-bold text-4 flex items-center`}>
                            <ActiveMenu status={getLocation === "/attendance"} name="Attendance" icon={<AttendanceIcon />} />  
                        </NavLink>
                        <CheckInOutFeature />
                        <NavLink to="/form" className={`text-muted w-full hover:text-primary cursor-pointer font-bold text-4 flex items-center`}>
                            <ActiveMenu status={getLocation === "/form"} name="Form" icon ={<FormIcon />} />
                        </NavLink>
                        <NavLink to="/setting" className={`text-muted w-full hover:text-primary cursor-pointer font-bold text-4 flex items-center`}>
                            <ActiveMenu status={getLocation === "/setting"} name="Setting" icon={<SettingIcon />} />
                        </NavLink>
                    </DFlexJustifyBetween>
                </div>
            </div>
        </>
    )
}

const ActiveMenu = ({status, name, icon}: {status: boolean, name: string, icon: React.ReactNode}) => {
    return(
        <div className={`flex flex-col items-center ${status && 'text-primary'} gap-3`}>
            {icon}
            {name}
        </div>
    )
}