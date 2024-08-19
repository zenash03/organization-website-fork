"use client"; //digunakan ketika memanggil package seperti icon

import { navbarLinks } from "@/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import libs from "@/libs/index"; // contoh cara pemanggilan function yang ada di file index di folder libs

export default function Topbar() {
    const path = usePathname();
    const isEmpty = libs.isEmptyObject(navbarLinks); // cara penggunaan function, kalau misal ada kurang silhkan ditambah sendiri
    
    return (
        <nav className="topbar">
            <div className="logo">
                <a href="/">
                    <img className="w-12" src="/assets/img/logo-sarang-semut.webp" alt="Logo UKM" />
                </a>
            </div>
            
            <div className="md:flex-initial flex-1 lg:w-1/2 sm:flex hidden flex-wrap justify-around">
                { navbarLinks?.map((link) => {
                    const isActive =(path.includes(link.route) && link.route.length > 1) || path === link.route;
                    
                    return (
                        <Link
                            key={link.label}
                            className={`
                                text-primary transition duration-150 ease-in-out
                                hover:font-bold py-4 px-6 ${isActive && "font-bold"}`
                            }
                            href={link.route}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    )
}