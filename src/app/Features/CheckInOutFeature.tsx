import CheckInIcon from "@app/components/Icons/CheckInIcon";
import { setClockIn, setClockOut } from "@app/store/reducers/app";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CheckInOutFeature() {
    const [isCheckIn, setIsCheckIn] = useState<boolean>(false);
    const { clockIn, clockOut } = useSelector((state: any) => state.app);
    const dispatch = useDispatch()
    const handleCheckIn = () => {
        if(moment(clockIn).format("YYYY-MM-DD") !== moment().format("YYYY-MM-DD")){
            setIsCheckIn(true);
            dispatch(setClockIn(new Date().getTime()))
        } else {
            alert("You have already clocked in today")
        }
    }
    const handleCheckOut = () => {
        setIsCheckIn(false);
        dispatch(setClockOut(new Date().getTime()))
    }

    useEffect(() => {
        if (isCheckIn) {
            setIsCheckIn(true);
        } else {
            setIsCheckIn(false);
        }
    }, [clockIn]);

    useEffect(() => {
        if(moment(clockIn).format("YYYY-MM-DD") !== moment().format("YYYY-MM-DD")){
            setIsCheckIn(false);
            dispatch(setClockIn(null))
            dispatch(setClockOut(null))
        }

        if(clockIn && !clockOut) {
            setIsCheckIn(true);
        }
    }, [])
    return(
        <div className="relative w-full px-3 flex justify-center items-end cursor-pointer" onClick={() => {isCheckIn ? handleCheckOut() : handleCheckIn()}}>
            <div className="absolute -top-[2.5rem] w-[4rem] rounded-full h-[4rem] hover:shadow-xl bg-primary text-white flex flex-col justify-center items-center">
                <CheckInIcon width="32" height="32"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="h-[24px]"></div>
                <p className="text-primary cursor-pointer font-bold text-4 flex items-center text-nowrap">{isCheckIn ? "Check Out": "Check In"}</p>
            </div>
        </div>
    )
}