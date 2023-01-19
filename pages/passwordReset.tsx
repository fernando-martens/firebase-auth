import { Box, Button, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "../components/Input";
import * as yup from "yup";
import AppNav from "../components/Nav";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";


const PasswordReset: React.FC = () => {

	const [error, setError] = useState(null);
	const [requested, setRequested] = useState(false);


	const schema = yup.object().shape({
		email: yup.string().required("Email is required").email("Invalid email")
	  });

	const formik = useFormik({
		initialValues: { email: "" },
		validationSchema: schema,
		onSubmit: async (values, {setSubmitting}) => {	
			sendPasswordResetEmail(auth, values.email)
				.then(() => {
					setRequested(true);
				})
				.catch((err) => {
					setError(err.message);
				});
			
			setSubmitting(false);
		}
	  });

	return (
		<>
			<AppNav />
			<Flex bg="gray.50" align="center" justify="center" h="100vh">
				<Box bg="white" p={6} rounded="md" w={80}>
					<Heading size="lg" paddingBottom={4} >Password reset</Heading>
					{requested ? 
						<>
							<Text fontSize='sm' color="blue">Email sent</Text>
							<Text fontSize='sm' color="blue">Check your email to reset your password</Text>
						</>
						: 
						<>
							{error && <Text paddingBottom={4} fontSize='sm' color="red">Error: {error}</Text>}
							<form onSubmit={formik.handleSubmit}>
								<VStack spacing={4} align="flex-start">
									<Input
										type="email"
										name="email"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.email} 
										errors={formik.errors}	
										touched={formik.touched}	
										label="Email"			
									/>	
									<Button type="submit" size="md" disabled={formik.isSubmitting} width="full" colorScheme="purple">
                                		Recover Password
									</Button>
								</VStack>	
							</form>
						</>
					}
					
				</Box>
			</Flex>		
		</>
	);

};

export default PasswordReset;
