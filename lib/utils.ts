import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { supabase } from "./supabase/client";
import { logout } from "./actions/auth.action";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEmptyObject(object: any) {
  for(let data of object) return false;
  return true;
}

export const projectId = () => {
  const project_Id = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID ?? "";
  if(!project_Id) console.error("Project ID on environment is not available");
  
  return project_Id;
}

export const isAuthValid = async () => {
  const { data, error } = await supabase.auth.getSession();
  
  if(!data?.session?.user) return false;
  return true;
}

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();
  
  if(!data?.user) return false;
  return data.user;
}