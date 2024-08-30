"use client"
import libs from '@/libs';
import { useEffect, useState } from 'react'

interface IntroProps {
    title: string;
    description: string;
    image_link: string | null;
    containerClassName?: string | null;
    textCol?: number;
    imageCol?: number;
}

const Intro = ({title, description, image_link, containerClassName = "bg-white", textCol = 1, imageCol = 2}: IntroProps) => {
    
    const [image, setImage] = useState<string | null>(null);

    
    useEffect(() => {    
        setImage(image_link);
    }, [image_link]);

  return (
    <div className={libs.cn(containerClassName)}>
        <div className="container flex flex-col md:items-center py-12 pb-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-0 justify-between">
                <div className={
                    libs.cn(`flex flex-col gap-y-6 md:row-start-1 md:col-start-${textCol}`
                    )}>
                    <h2 className="text-2xl lg:text-4xl uppercase font-bold text-primary">{title}</h2>
                    <p className="text-sm lg:text-base font-medium text-primary leading-7 lg:leading-8 h-full text-justify">{description}</p>
                </div>
                <div className={`md:row-start-1 md:col-start-${imageCol}`}>
                    {
                        image && (
                            <img src={image} className="w-full rounded-xl"/>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro