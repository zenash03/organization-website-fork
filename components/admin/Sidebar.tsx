"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { CaretRight, SignOut } from "@phosphor-icons/react";
import { useState } from "react";

export default function Sidebar() {
  const [isExpand, setExpand] = useState(false);
  const pathname = usePathname();

  const links = sidebarLinks.map(link => {
    const isActive = link.route == pathname;

    return (
      <Link
        href={link.route}
        key={link.route}
        className={`${isActive ? 'bg-secondary font-semibold' : 'bg-primary text-white'} sidebar-link`}
      >
        {link.icon}
        <span className={`text-sm lg:block ${isExpand ? 'sm:block' : 'sm:hidden'} block transition`}>{link.label}</span>
      </Link>
    )
  })

  const expandMenu = () => {
    setExpand(!isExpand);
  }
  return (
    <div className={`leftsidebar lg:sidebar  ${isExpand ? 'sm:sidebar' : 'sm:sidebar-sm'}`}>
      <div className="grid grid-rows-[1fr_65px] h-full">
        <div className="h-full overflow-y-auto overflow-x-hidden scrollbar">
          {links}
        </div>

        <div className="block">
          <button className="sidebar-link">
            <SignOut size={32} />
            <span className={`text-sm lg:block ${isExpand ? 'sm:block' : 'sm:hidden'} block transition`}>UKM Sarang Semut</span>
          </button>
        </div>
      </div>

      <button
        className={`expand-button absolute -right-7 ${isExpand ? 'rotate-180' : 'rotate-0'}`}
        onClick={expandMenu}
      >
        <span className="text-white">
          <CaretRight color="black" size={28} />
        </span>
      </button>
    </div>
  )
}