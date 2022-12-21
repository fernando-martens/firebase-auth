import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Link from "../components/Link";

const IndexPage = () => 
	<>
	
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md">
				<HStack spacing={4} align="center">
					<Link href="./" name="Home" />
					<Link href="./login" name="Login" colorScheme="purple" />
				</HStack>
			</Box>
		</Flex>
	</>		
;

export default IndexPage;
