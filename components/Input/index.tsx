import React, { InputHTMLAttributes } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { FormikHandlers } from "formik";

interface IComponentInput extends InputHTMLAttributes<HTMLInputElement>{
    onChange: FormikHandlers["handleChange"];
    onBlur: FormikHandlers["handleChange"];
	errors: any;
	touched: any;
	name: string;
	label: string;
}

const ComponentInput: React.FC<IComponentInput> = ({
	onChange,
	onBlur,
	errors,
	touched,
	type,
	name,
	label,
	value
}) => 
	<>
		<FormControl isInvalid={!!errors[name] && touched[name]}>
			<FormLabel htmlFor="email">{label}</FormLabel>
			<Input 	
				name={name}
				type={type}
				variant='outline'
				placeholder={label} 
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<FormErrorMessage>{errors[name]}</FormErrorMessage>
		</FormControl>		
	</>
	;

export default ComponentInput;
