import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useState } from 'react'
import GalleryModal from '../Modals/GalleryModal';

interface GalleryCardProps {
    id: number;
    name: string;
    image_link: string;
    description?: string;
    className?: string;
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
                `aspect-video bg-slate-300 rounded-lg shadow-md border border-gray-100 overflow-hidden`,
                className
            )} onClick={handleCardClick}>
                {
                    image? (
                        <img src={image} alt="" 
                            className='aspect-video object-cover rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer'
                        />
                    ) : (
                        <div></div>
                    )
                }
            </div>
            {
                isModalOpen && (
                    <GalleryModal
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


export { GalleryCard }