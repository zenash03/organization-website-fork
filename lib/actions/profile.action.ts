"use server";

import prisma from "../prismaClient";

export const fetchProfile = async (userId: string) => {
    try {
        const profile = await prisma?.profile.findUnique({
            where: {
                userId
            }
        });
         
        return profile
    } catch (error: any) {
        console.error(error.message);
        throw error;
    }
}