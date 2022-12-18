import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Shared from "../components/Shared";

export default function App({ Component, pageProps }){
	return (
		<ChakraProvider>
			<Shared>
				<Component {...pageProps} />
			</Shared>
		</ChakraProvider>
	);
}
