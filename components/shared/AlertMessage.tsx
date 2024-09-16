"use client";

import { error } from "console";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

interface Props {
    title: string;
    message: string;
    type?: string;
}

export default function AlertMessage ({ title, message, type} : Props) {
    return (
        <Alert variant={type === "error" ? "destructive" : undefined}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{ title }</AlertTitle>
            <AlertDescription>
                { message }
            </AlertDescription>
        </Alert>
    )
}