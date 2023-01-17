import React from "react";
import RootProvider from "../context/rootProvider";
import { SessionProvider } from "next-auth/react";
import AppNav from "../components/Nav";

export default function App({ Component, pageProps }){
	return (
		<SessionProvider session={pageProps.session}>
			<RootProvider>
				<Component {...pageProps} />
				<AppNav />
			</RootProvider>
		</SessionProvider>
	);
}
