import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { createSupabaseServerClient } from './lib/supabase/server';

//if want to specific path to run middleware, make sure add in matcher config
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createSupabaseServerClient();
  
  const { data, error } = await supabase.auth.getSession();
  
  if (!data.session?.user && req.nextUrl.pathname.startsWith("/admin")) {
    // If the user is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
  
  if(data.session?.user && req.nextUrl.pathname.startsWith("/sign-in")) {
    // If the user is already authenticated, redirect to the admin
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  // If authenticated, continue to the requested page
  return res;
}

export const config = {
  //The matcher option allows you to target specific paths for the Middleware to run on
  matcher: ['/sign-in', '/admin/:path*'],
};
