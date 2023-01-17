import { HStack } from "@chakra-ui/react";
import React from "react";
import Link from "../Link";

const AppNav: React.FC = () => 
	<HStack style={{ position: "absolute", top: "1rem", marginLeft: "auto", marginRight: "auto", left: 0, right: 0 }} justifyContent="center">
		<Link href="./" name="Home" size="md" colorScheme="pink" />
		<Link href="./login" name="Login" colorScheme="pink" size="md" />
		<Link href="./app" name="App" colorScheme="pink" size="md" />
	</HStack>
;

export default AppNav;
