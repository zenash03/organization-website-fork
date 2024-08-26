"use client"
import { useEffect, useState } from 'react'

interface IntroProps {
    title: string;
    description: string;
    image: string | null;
}

const Intro = () => {
    const intro: IntroProps = {
        "title": "Daftar Divisi",
        "description": "UKM Sarang Semut is composed of three dynamic divisions, each dedicated to a specific area of the performing arts. These divisions provide our members with a platform to explore and develop their artistic talents, while also contributing to the cultural richness of Universitas Tanjungpura and the wider community.",
        image: "https://www.bing.com/th?id=OIP.ffrZmEgAKlxj1BMWrQ5xHwHaEl&w=154&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2s"
    }
    
    const [image, setImage] = useState<string | null>(null);

    
    useEffect(() => {    
        setImage(intro.image);
    }, [intro.image])

  return (
    <div className="bg-stone-200">
        <div className="container flex flex-col md:items-center py-12 pb-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-0 justify-between">
                <div className="flex flex-col gap-y-6">
                    <h2 className="text-2xl lg:text-3xl uppercase font-bold text-primary">{intro.title}</h2>
                    <p className="text-sm lg:text-base font-semibold text-primary leading-6 text-justify">{intro.description}</p>
                </div>
                {
                    image && (
                        <img src={image} className="w-full rounded-xl"/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Intro