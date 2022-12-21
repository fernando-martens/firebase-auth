import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import Input from "../components/Input";
import * as yup from "yup";


const Login: React.FC = () => {

	const schema = yup.object().shape({
		password: yup.string().required("Senha é requerida"),
		email: yup.string().required("Email é requerido").email("Email inválido")
	  });

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: schema,
		onSubmit: (values, {setSubmitting} ) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
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
								label="Senha"				
							/>
							<Button type="submit" disabled={formik.isSubmitting} width="full" colorScheme="purple">
								Confirmar
							</Button>
						</VStack>	
					</form>
				</Box>
		 </Flex>		
		</>
	);

};

export default Login;
