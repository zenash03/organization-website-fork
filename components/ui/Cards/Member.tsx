"use client"
import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useState } from 'react'

interface MemberProps {
    id: number;
    name: string;
    image_link: string;
    position: string;
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
        <div className="bg-gray-100 w-full aspect-square lg:w-60 rounded-full flex justify-center items-center">
            {
                image && (
                    <img src={image} alt="" className="w-full aspect-square rounded-full object-cover" />
                )
            }
        </div>
        <h2 className="text-center capitalize mt-5 text-base lg:text-xl font-semibold text-primary">{name}</h2>
        <h4 className="text-center capitalize mt-1 lg:mt-1.5 text-sm lg:text-lg font-medium text-gray-500">{position}</h4>
    </div>
  )
}

export { MemberCard }