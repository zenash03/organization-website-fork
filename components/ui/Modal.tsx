import React, { useEffect, useState } from 'react'
import { X } from '@phosphor-icons/react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image_link: string;
    name: string;
    description?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen, onClose, image_link, name, description
}) => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        setImage(image_link);
    }, [image_link]);
    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4 lg:p-0">
            <div className="bg-white rounded-lg shadow-lg p-4 lg:max-w-2xl w-full divide-y">
                <div className="flex justify-between py-2">
                    <h2 className="font-semibold text-primary text-lg">Photo</h2>
                    <button className="text-gray-400" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                
                <div className="py-4">
                    {
                        image && (
                            <img src={image} className="w-full h-auto rounded-lg" />
                        )
                    }
                </div>
                <div className="py-4 pb-2">
                    <p className="text-primary font-semibold text-base">{name}</p>
                    <p className="text-gray-700 text-sm mt-1">{description}loremawdkawdkk</p>
                </div>
            </div>
        </div>
    )
}

export default Modal