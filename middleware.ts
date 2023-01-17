import { withAuth } from "next-auth/middleware";


export default withAuth({
	pages: {
		signIn: "/login",
		error: "/"
	}
});


export const config = {
	matcher: "/app/:path*"
};
