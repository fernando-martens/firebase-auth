import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const RootProvider: React.FC = ({ children }) => 
	<>
		<ChakraProvider>
			{children}
		</ChakraProvider>
	</>
;

export default RootProvider;
