import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useState } from 'react'
import Modal from './Modal';

interface GalleryProps {
    children: ReactNode;
    className?: string;
    title?: string;
    gridClassName?: string;
}
interface GalleryCardProps {
    id: number;
    name: string;
    image_link: string;
    description?: string;
    className?: string;
}

function Gallery({
    children,
    className,
    title = "Galeri",
    gridClassName = "grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2"
} : GalleryProps) {
    return (
        <div className="container flex flex-col gap-y-6 lg:gap-y-8">
            <h2 className="text-xl lg:text-2xl text-primary font-semibold">{title}</h2>
            <div className={
                cn(
                    `grid`,
                    gridClassName
                )}>
                {children}
            </div>
        </div>
    )
}

function GalleryCard({
    id,
    name,
    image_link,
    description,
    className
}: GalleryCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        setImage(image_link);
    }, [image_link]);

    const handleCardClick = () => {
        console.log("open Modal")
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        console.log("closing pressed")
        setIsModalOpen(false);
    }

    return (
        <>
            <div key={id} className={cn(
                `w-full h-64 md:h-80 bg-slate-300 rounded-lg shadow-md border border-gray-100 overflow-hidden`,
                className
            )} onClick={handleCardClick}>
                {
                    image && (
                        <img src={image} alt="" 
                            className='w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer'
                        />
                    )
                }
            </div>
            {
                isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        name={name}
                        image_link={image || ''}
                        description={description}
                    />
                )
            }
        </>
    )
}


export { Gallery, GalleryCard }