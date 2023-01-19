import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import AppNav from "../../components/Nav";

const AppPageHome: React.FC = () => {

	const { data } = useSession();

	return (
		<>
			<AppNav />
			<Flex bg="gray.50" align="center" justify="center" h="100vh">
				<Box bg="white" p={6} rounded="md" textAlign="center">
					<Heading alignSelf="center" size="lg" paddingBottom={4} >App Home</Heading>
					<Text paddingBottom={1} fontSize='md' align="center">This page is private</Text>
					<Text paddingBottom={1} fontSize='md' align="center">{data?.user.email}</Text>
					<HStack spacing={4} paddingTop={4} align="center" justifyContent="center">
						<Button onClick={() => signOut()} name="App" colorScheme="red" size="md">
						Sign out
						</Button>
					</HStack>
				</Box>
			</Flex>
		</>
	);

};

export default AppPageHome;
