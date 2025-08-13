import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export const middleware = async (req) => {
    const token = await getToken({ req });
    const isTokenOk = Boolean(token);
    const isAdmin = token?.role === "admin";
    const isProtectedRoute = req.nextUrl.pathname.startsWith("/user");


    // if (isProtectedRoute && !isAdmin) {
    //     const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    //     return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url))
    // }

    return NextResponse.next()
};