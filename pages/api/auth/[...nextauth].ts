import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";


export default NextAuth({
	session: {
		strategy: "jwt"
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(_, req) {
				const { email, password } = req.query;
				return await signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => ({ 
						id: userCredential.user.uid, 
						...userCredential.user  
					}))
					.catch((error) => {
						throw new Error(error);
					});	
			}
		})
	]
});
