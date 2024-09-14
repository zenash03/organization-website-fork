"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface GridProps {
    children: ReactNode;
    containerClassName?: string;
    titleClassName?: string;
    gridClassName?: string;
    title?: string;
}

function Grid({
    children,
    containerClassName,
    titleClassName,
    gridClassName = "grid-cols-1 gap-7 lg:grid-cols-3 sm:grid-cols-2",
    title
}: GridProps): JSX.Element {
    return (
        <div className={
            cn(
                "container flex flex-col gap-y-6 md:gap-y-8",
                containerClassName
            )}>
                {
                    title && (
                        <h1 className={
                            cn(
                                "text-xl md:text-2xl text-primary font-semibold",
                                titleClassName
                            )}>
                                {title}
                        </h1>
                    )
                }
            <div className={
                cn(
                    "grid",
                    gridClassName
                )
            }>
                {children}
            </div>
        </div>
    )
}

export default Grid;