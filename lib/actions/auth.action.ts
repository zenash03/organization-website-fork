"use server";

import { cookies } from "next/headers";
import { projectId } from "../utils";
import { createSupabaseServerClient } from "../supabase/server";
import { redirect } from "next/navigation";
import { supabase } from "../supabase/client";

export async function login({ email, password }: { email: string, password: string }) {
    try{
        const supabase = createSupabaseServerClient();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw new Error(error.message);

        return {
            data: data,
            error: null
        };
    } catch (error: any ) {
        return {
            data: null,
            error: error.message
        };
    }
}

export async function readSession() {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.getSession();
    
    if(!data.session) {
        await logout();
        return redirect("/sign-in");
    }
    return data.session;
}

export async function readUser() {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.getUser();
    
    return data.user;
}

export async function logout() {
    const supabase = createSupabaseServerClient();
    await supabase.auth.signOut();
    return true;
}