"use client"
import libs from '@/libs';
import React, { ReactNode, useEffect, useState } from 'react'

interface MemberGridProps {
    children: ReactNode;
    className?: string;
    gridClassName?: string;
    title?: string;
}

interface MemberProps {
    id: number;
    name: string;
    image_link: string;
    position: string;
}

function MemberGrid({
    children,
    className,
    title = "Anggota Inti",
    gridClassName = "grid-cols-2 gap-8 lg:grid-cols-4 sm:grid-cols-2"
}: MemberGridProps): JSX.Element {
    return (
        <div className={libs.cn(
            `container flex flex-col gap-y-10 my-10`,
            className
        )}>
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

function MemberCard({
    id,
    name,
    image_link,
    position
}: MemberProps) {

    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        setImage(image_link);
    }, [image_link])
  return (
    <div key={id} className="flex flex-col items-center">
        <div className="bg-gray-100 w-32 h-32 lg:w-60 lg:h-60 rounded-full flex justify-center items-center">
            {
                image && (
                    <img src={image} alt="" className="w-full h-full rounded-full object-cover" />
                )
            }
        </div>
        <h2 className="text-center capitalize mt-5 text-base lg:text-xl font-semibold text-primary">{name}</h2>
        <h4 className="text-center capitalize mt-1 lg:mt-1.5 text-sm lg:text-lg font-medium text-gray-500">{position}</h4>
    </div>
  )
}

export { MemberCard, MemberGrid }