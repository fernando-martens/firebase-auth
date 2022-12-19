import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";

const RootProvider: React.FC = ({ children }) => 
	<>
		<ChakraProvider>
			<AuthProvider>
				{children}
			</AuthProvider>	
		</ChakraProvider>
	</>
;

export default RootProvider;
