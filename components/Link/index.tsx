import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface IButtonLink extends ButtonProps{
  href: string;
  name: string;
}

const ButtonLink: React.FC<IButtonLink> = ({
	href,
	name,
	...rest
}) => 
	<Button colorScheme='teal' size='sm' {...rest}>
		<Link href={href}>{name}</Link>
	</Button>
  ;

export default ButtonLink;
