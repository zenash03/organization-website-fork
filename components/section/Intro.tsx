"use client"
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react'

interface IntroProps {
    title: string;
    description: string;
    image_link: string | null;
    containerClassName?: string | null;
    imageCol?: number;
}

const Intro = ({title, description, image_link, containerClassName = "bg-white", imageCol = 2}: IntroProps) => {
    
    const [image, setImage] = useState<string | null>(null);
    const imageColStart = `col-start-${imageCol}`;
    
    useEffect(() => {    
        setImage(image_link);
    }, [image_link]);

  return (
    <div className={cn(containerClassName)}>
        <div className="container flex flex-col md:items-center py-12 pb-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-0 justify-between">
                <div className={
                    cn(`flex flex-col gap-y-6 md:row-start-1`
                    )}>
                    <h2 className="text-2xl lg:text-4xl capitalize font-bold text-primary">{title}</h2>
                    <p className="text-sm lg:text-base font-medium text-primary leading-7 lg:leading-8 h-full text-justify">{description}</p>
                </div>
                <div className={`md:row-start-1 ${imageColStart}`}>
                    {
                        image && (
                            <img src={image} className="w-full aspect-video rounded-xl"/>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro