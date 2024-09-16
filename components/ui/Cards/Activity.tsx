"use client"

import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActivityProps {
    id: number;
    date: string;
    title: string;
    imageUrl?: string;
    description: string;
    slug: string;
}

function ActivityCard({
    id,
    date,
    title,
    imageUrl = "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
    description,
    slug
}:ActivityProps) {
    const router = useRouter();
    const toDetail = () => {
        router.push(`/aktivitas/${slug}`)
    }
    return (
        <div key={id} className="flex flex-col">
            {
                imageUrl? (
                    <img src={imageUrl} className="aspect-video rounded-xl cursor-pointer" onClick={toDetail}/>
                ) : (
                    <div className="aspect-video bg-slate-100 rounded-xl" onClick={toDetail}></div>
                )
            }
            <p className="text-sm text-gray-400 py-1.5 mt-1">{date}</p>
            <p className="text-black font-semibold text-lg lg:text-xl leading-8 cursor-pointer" onClick={toDetail}>{title}</p>
            <p className="text-sm lg:text-base text-gray-400 font-medium lg:py-1 leading-6 line-clamp-2 cursor-pointer" onClick={toDetail}>{description}</p>
        </div>
    )
}

export { ActivityCard }