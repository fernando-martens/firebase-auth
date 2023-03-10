import { Box, Button, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "../components/Input";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import AppNav from "../components/Nav";
import Link from "next/link";


const Login: React.FC = () => {

	const [error, setError] = useState(null);

	const router = useRouter();

	const schema = yup.object().shape({
		password: yup.string().required("Password is required"),
		email: yup.string().required("Email is required").email("Invalid email")
	  });

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: schema,
		onSubmit: async (values, {setSubmitting}) => {
			await signIn("credentials", { redirect: false,callbackUrl: "/app" }, values)
				.then((response) => {
					console.log(response);
					if(response.ok)
						router.push(response.url);
					else
						setError(response.error);
				});
			setSubmitting(false);
		}
	  });

	return (
		<>
			<AppNav />
			<Flex bg="gray.50" align="center" justify="center" h="100vh">
				<Box bg="white" p={6} rounded="md" w={80}>
					<Heading size="lg" paddingBottom={4} >Login</Heading>
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
							<Input
								name="password"
								type="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}		
								errors={formik.errors}	
								touched={formik.touched}	
								label="Password"				
							/>
							<Button type="submit" size="md" disabled={formik.isSubmitting} width="full" colorScheme="purple">
									Sign in
							</Button>
						</VStack>	
					</form>
					<Link href="/passwordReset">
						<Text paddingTop={2} fontSize='sm' color="blue">Forgot password</Text>
					</Link>
				</Box>
			</Flex>		
		</>
	);

};

export default Login;
