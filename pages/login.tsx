import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import Input from "../components/Input";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";


const Login: React.FC = () => {

	const router = useRouter();

	const schema = yup.object().shape({
		password: yup.string().required("Password is required"),
		email: yup.string().required("Email is required").email("Invalid email")
	  });

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: schema,
		onSubmit: async (values, {setSubmitting}) => {
			const response = await signIn("credentials", {
				redirect: false,
				callbackUrl: "/app"
			}, values);
			
			if(response.ok)
				router.push(response.url);

			setSubmitting(false);
		}
	  });

	return (
		<>
		 <Flex bg="gray.100" align="center" justify="center" h="100vh">
				<Box bg="white" p={6} rounded="md" w={80}>
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
				</Box>
		 </Flex>		
		</>
	);

};

export default Login;
