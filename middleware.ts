import { NextResponse } from "next/server";

export function middleware() {
	const hasPermission = false;
	if(!hasPermission){
		return NextResponse.redirect("http://localhost:3000/login");
	}		
}

export const config = {
	matcher: "/app/:path*"
};
