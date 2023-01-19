import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AppNav from "../components/Nav";

const IndexPage = () => {

	console.log(process.env.FIREBASE_API_KEY);

	return (
		<>	
			<AppNav />
			<Flex bg="gray.50" align="center" justify="center" h="100vh">
				<Box bg="white" p={6} rounded="md" textAlign="center">
					<Heading size="lg" paddingBottom={4} >Home</Heading>
					<Text paddingBottom={4} fontSize='md'>This page is public</Text>		
				</Box>
			</Flex>
		</>	
	);

};


export default IndexPage;
