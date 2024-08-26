"use client"

import { ReactNode, useState } from "react"
import libs from "@/libs"

interface ActivityGridProps {
    children: ReactNode;
    className?: string;
    gridClassName?: string;
    title?: string;
}

interface ActivityProps {
    id: number;
    date: string;
    title: string;
    description: string;
}

function ActivityGrid({
    children,
    className,
    title = "Kegiatan",
    gridClassName = "grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2"
}:ActivityGridProps): JSX.Element {
    return (
        <div className={libs.cn(
            `container flex flex-col gap-y-8`,
            className)
        }>
            <h2 className="text-2xl text-primary font-semibold">{title}</h2>
            <div className={libs.cn(
                `grid`,
                gridClassName
            )}>
                {children}
            </div>
        </div>
    )
}

function ActivityCard({
    id,
    date,
    title,
    description
}:ActivityProps) {
    return (
        
        <div key={id} className="flex flex-col">
            <div className="w-full h-64 bg-black rounded-lg">

            </div>
            <p className="text-sm text-gray-400 py-2 mb-1">{date}</p>
            <p className="text-black font-semibold text-xl leading-8">{title}</p>
            <p className="text-base text-gray-400 font-medium py-1 leading-6">{description}</p>
        </div>
    )
}

export { ActivityGrid, ActivityCard }