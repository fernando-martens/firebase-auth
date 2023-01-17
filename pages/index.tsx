import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const IndexPage = () => 
	<>	
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md">
				<Text paddingBottom={4} fontSize='md' align="center">This page is public</Text>		
			</Box>
		</Flex>
	</>		
;

export default IndexPage;
