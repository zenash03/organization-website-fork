"use client"; //digunakan ketika memanggil package seperti icon

import { navbarLinks } from "@/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import libs from "@/libs/index"; // contoh cara pemanggilan function yang ada di file index di folder libs
import { useState } from "react";

interface NavbarProps {
    className?: string;
}
export default function Navbar({className}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const isEmpty = libs.isEmptyObject(navbarLinks); // cara penggunaan function, kalau misal ada kurang silhkan ditambah sendiri
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <nav className={libs.cn(
            `w-full text-gray-700 bg-white font-poppins shadow-lg`,
            className
            )}>
            <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-2 lg:px-4 px-10">
                <div className="flex flex-row items-center justify-between py-4">
                    <a href="/">
                        <img className="w-12" src="/assets/img/logo-sarang-semut.webp" alt="Logo UKM" />
                    </a>
                    <button
                        className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                        onClick={toggleMenu}
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            />
                        ) : (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            />
                        )}
                        </svg>
                    </button>
                </div>
                
                <div className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${isOpen ? "flex" : "hidden"}`}>
                    { navbarLinks?.map((link) => {
                        const isActive =(path.includes(link.route) && link.route.length > 1) || path === link.route;
                        
                        return (
                            <Link
                                key={link.label}
                                className={`
                                    px-4 py-4 mt-2 text-base font-normal rounded-sm hover:text-primary focus:text-primary hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline ${isActive && "bg-gray-100"}`
                                }
                                href={link.route}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    )
}