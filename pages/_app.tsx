import React from "react";
import RootProvider from "../context/rootProvider";

export default function App({ Component, pageProps }){
	return (
		<RootProvider>
			<Component {...pageProps} />
		</RootProvider>
	);
}
