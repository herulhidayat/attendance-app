import NineClockIcon from "@app/components/Icons/NineClockIcon";
import SixClockIcon from "@app/components/Icons/SixClockIcon";
import TimerIcon from "@app/components/Icons/TimerIcon";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function AttendanceStatusFeature() {
    const { clockIn, clockOut } = useSelector((state: any) => state.app);
    const [timeCount, setTimeCount] = useState<number>(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (clockIn) {
            interval = setInterval(() => {
                if(timeCount) {
                    setTimeCount(timeCount + 1);
                } else {
                    setTimeCount((new Date().getTime() - clockIn) / 1000);
                }
            }, 1000);
        }
        if (clockOut) {
            clearInterval(interval);
        }
    }, [clockIn, clockOut, timeCount]);

    const renderWorkingTime = useMemo(() => {
        const duration = moment.duration(timeCount, 'seconds');

        const hours = String(duration.hours()).padStart(2, '0');
        const minutes = String(duration.minutes()).padStart(2, '0');
        const seconds = String(duration.seconds()).padStart(2, '0');
        return (
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-5 text-primary">
                {timeCount ? `${hours}:${minutes}:${seconds}` : '00:00:00'}
              </p>
              <p className="text-4">Working Hours</p>
            </div>
        )
    }, [timeCount])
    return(
        <div className="flex gap-0 w-full">
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="text-primary">
              <NineClockIcon/>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-5">{clockIn ? moment(clockIn).format('HH:mm') : "--:--"}</p>
              <p className="text-4">Check In</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="text-primary">
              <TimerIcon/>
            </div>
            {renderWorkingTime}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <div className="text-primary">
              <SixClockIcon/>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-5">{clockOut ? moment(clockOut).format('HH:mm') : "--:--"}</p>
              <p className="text-4">Check Out</p>
            </div>
          </div>
        </div>
    )
}