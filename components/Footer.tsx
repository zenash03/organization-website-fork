"use client";
import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";

 //digunakan ketika memanggil package seperti icon

export default function Footer() {
  return (
    <footer className="bg-primary min-h-10 w-full sm:py-5 py-3 px-8 lg:px-3">
        <div className="container divide-solid divide-y-2">
          
            <div className="flex flex-wrap justify-between py-2 xs:flex-row flex-column gap-2">
              <div className="flex flex-wrap lg:justify-center items-center gap-3 sm:w-auto w-full">
                <div className="object-contain 2xl:w-20 2xl:h-20 w-16 h-16">
                  <img src={"/assets/img/logo-sarang-semut.webp"} alt={"Logo Sistem"} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-white 2xl:text-2xl md:text-xl text-lg font-semibold">UKM Sarang Semut</h4>
              </div>
              
              <div className="flex items-center sm:gap-1 gap-5 text-white text-center lg:justify-center sm:w-auto w-full">
                <InstagramLogo className="text-4xl" />
                <Link className="2xl:text-lg md:text-lg text-base" href={"https://www.instagram.com/ukmsarangsemut/"} target="_blank">
                  @ukmsarangsemut
                </Link>
              </div>
            </div>
            
            <div className="text-center text-white py-4">
              <h4 className="2xl:text-lg sm:text-base text-sm">©Copyright UKM Sarang Semut. Since 2024</h4>
            </div>
        </div>
    </footer>
  );
}