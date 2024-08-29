"use client"

import { ReactNode, useState } from "react"
import libs from "@/libs"
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    slug: string;
}

function ActivityGrid({
    children,
    className,
    title = "Kegiatan",
    gridClassName = "grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2"
}:ActivityGridProps): JSX.Element {
    return (
        <div className={libs.cn(
            `container flex flex-col gap-y-6 lg:gap-y-8`,
            className)
        }>
            <h2 className="text-xl lg:text-2xl text-primary font-semibold">{title}</h2>
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
    description,
    slug
}:ActivityProps) {
    const router = useRouter();
    const toDetail = () => {
        router.push(`/aktivitas/${slug}`)
    }
    return (
        <div key={id} className="flex flex-col" onClick={toDetail}>
            <div className="w-full h-64 bg-black rounded-lg">

            </div>
            <p className="text-sm text-gray-400 py-2 lg:mb-1">{date}</p>
            <p className="text-black font-semibold text-lg lg:text-xl leading-8">{title}</p>
            <p className="text-sm lg:text-base text-gray-400 font-medium lg:py-1 leading-6 line-clamp-2">{description}</p>
        </div>
    )
}

export { ActivityGrid, ActivityCard }