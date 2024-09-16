"use client"; // if use client doesn't exist when using useForm, it will return error 

import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInValidation } from "@/lib/validations/auth/signin";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

//import UI
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AlertMessage from "../shared/AlertMessage";
import { revalidatePath } from "next/cache";
import { POST } from "@/lib/fetchHelper";
import { login } from "@/lib/actions/auth.action";
import { projectId } from "@/lib/utils";

export default function LoginForm() {
    const project_id = projectId();
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(SignInValidation),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    
    // state
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: z.infer<typeof SignInValidation>) => {
        setError(null);
        setLoading(true);
        
        try {
            const { data, error } = await login({
                email: values.email,
                password: values.password
            });
            
            if(error) throw new Error(error);
            
            if(data) {
                localStorage.setItem(`sb-${project_id}-auth-token`, JSON.stringify(data.session));
                router.push("/admin");
            }
        } catch (error: any) {
            setError(error)
        }
        
        setLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel >
                                Email
                            </FormLabel>
                            <FormControl >
                                <Input
                                    type="email"
                                    className="form-control"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel >
                                Password
                            </FormLabel>
                            <FormControl >
                                <Input
                                    type="password"
                                    className="form-control"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" className="w-full" disabled={loading} >Masuk</Button>
            </form>
            
            {
                error && (
                    <AlertMessage
                        type="error"
                        title="Gagal login"
                        message={error}
                    />
                )
            }
            
        </Form>
    )
}