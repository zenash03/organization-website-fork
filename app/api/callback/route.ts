import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// this api is used for signup, if no singup then it won't needed
export async function GET(req: Request) {
    const requestUrl = new URL(req.url); // get url from request url
    const code = requestUrl.searchParams.get('code'); // get code parameter from request url
    
    //if code is specified then it will exchange code with supabase session
    if(code) {
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.auth.exchangeCodeForSession(code);
    }
    
    return NextResponse.redirect(location.origin);
}