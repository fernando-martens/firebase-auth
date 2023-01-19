import React from "react";
import RootProvider from "../context/rootProvider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }){
	return (
		<SessionProvider session={pageProps.session}>
			<RootProvider>
				<Component {...pageProps} />
			</RootProvider>
		</SessionProvider>
	);
}
