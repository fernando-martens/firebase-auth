import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const AppPageHome: React.FC = () => {

	const { data } = useSession();

	return (
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md">
				<Text paddingBottom={1} fontSize='md' align="center">This page is private</Text>
				<Text paddingBottom={1} fontSize='md' align="center">{data?.user.email}</Text>
				<HStack spacing={4} align="center" justifyContent="center">
					<Button onClick={() => signOut()} name="App" colorScheme="red" size="md">
						Sign out
					</Button>
				</HStack>
			</Box>
		</Flex>
	);

};

export default AppPageHome;
