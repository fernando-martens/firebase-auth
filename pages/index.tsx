import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../components/Link";

const IndexPage = () => 
	<>	
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md">
				<Text paddingBottom={1} fontSize='sm' align="center">Essa página é acessivel publicamente</Text>
				<HStack spacing={4} align="center" justifyContent="center">
					<Link href="./" name="Home" />
					<Link href="./login" name="Login" colorScheme="purple" />
					<Link href="./app" name="App" colorScheme="telegram" />
				</HStack>
			</Box>
		</Flex>
	</>		
;

export default IndexPage;
