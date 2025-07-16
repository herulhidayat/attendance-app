import BackIcon from "@app/components/Icons/BackIcon";
import { DFlex } from "@app/styled/flex.styled";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotificationPage() {
    const navigate = useNavigate()
    const [inActive, setInActive] = useState<any>([])

    const listNotification = [
        {
            id: 1,
            status: true,
            category: "reimbursement",
            content: "Your submission has been accepted, please check your bank account. Thanks you.",
            created_at: "2025-07-01"
        },
        {
            id: 2,
            status: false,
            category: "sickness",
            content: "Your submission for sickness compensation has been denied, please reapply.",
            created_at: "2025-07-02"
        },
        {
            id: 3,
            status: true,
            category: "overtime",
            content: "Your submission for overtime compensation has been accepted, please check your bank account. Thanks you.",
            created_at: "2025-07-03"
        },
        {
            id: 4,
            status: false,
            category: "reimbursement",
            content: "Your submission for reimbursement has been denied, please reapply.",
            created_at: "2025-07-04"
        },
        {
            id: 5,
            status: true,
            category: "sickness",
            content: "Your submission for sickness has been accepted, please check your bank account. Thanks you.",
            created_at: "2025-07-05"
        },
        {
            id: 6,
            status: false,
            category: "overtime",
            content: "Your submission for overtime has been denied, please reapply.",
            created_at: "2025-07-06"
        },
        {
            id: 7,
            status: true,
            category: "reimbursement",
            content: "Your submission for reimbursement has been accepted, please check your bank account. Thanks you.",
            created_at: "2025-07-07"
        },
        {
            id: 8,
            status: true,
            category: "reimbursement",
            content: "Reimbursement request has been processed successfully.",
            created_at: "2025-07-08"
        },
        {
            id: 9,
            status: false,
            category: "sickness",
            content: "Sickness compensation request is under review.",
            created_at: "2025-07-09"
        },
        {
            id: 10,
            status: true,
            category: "overtime",
            content: "Overtime compensation has been credited to your account.",
            created_at: "2025-07-10"
        },

    ]
    return(
        <>
            <section>
                <div className="w-full shadow-xl container mx-auto px-5">
                    <DFlex className="py-5">
                        <div onClick={() => {navigate(-1)}}>
                            <BackIcon />
                        </div>
                        <h1 className="text-primary text-7 font-bold">Notification</h1>
                    </DFlex>
                </div>
            </section>

            <section>
                <div className="flex flex-col w-full overflow-y-auto h-[calc(100vh-4.5rem)]">
                    {listNotification.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((item, index) => (
                        <div key={index} className="w-full container mx-auto px-5" onClick={() => setInActive((prev: number[]) => [...prev, item.id])} style={{backgroundColor:  inActive.includes(item.id) ? "" : "#eef4ff"}}>
                            <div className="flex gap-3 py-3">
                                <div>
                                    <div className="h-[50px] w-[50px] rounded-lg bg-gradient-to-r from-cyan-500 to-pink-600 flex justify-center items-center">
                                        <img src={`/static/img/${item?.category}.png`} alt="notification" width={40}/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex justify-between w-full">
                                        <p className="font-bold text-5 capitalize">{item.category}</p>
                                        <p className="text-4">{moment(item.created_at).fromNow()}</p>
                                    </div>
                                    <p className="text-4">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}