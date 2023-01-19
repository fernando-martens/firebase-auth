import { HStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "../Link";

const AppNav: React.FC = () => {


	const { status } = useSession();

	return (
		<HStack style={{ position: "absolute", top: "1rem", marginLeft: "auto", marginRight: "auto", left: 0, right: 0 }} justifyContent="center">
			<Link href="./" name="Home" size="md" colorScheme="facebook" />
			{status === "authenticated" ? 
				<>
					<Link href="./app" name="App" colorScheme="facebook" size="md" />
				</>
						 : 
				<>
					<Link href="./login" name="Login" colorScheme="facebook" size="md" />
					<Link href="./register" name="Register" colorScheme="facebook" size="md" />
				</> 	
			}  
		</HStack>
	);

};

export default AppNav;
