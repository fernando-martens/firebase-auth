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
	<Link href={href}>
		<Button colorScheme='teal' size='sm' {...rest}>
			{name}
		</Button>
	</Link>
  ;

export default ButtonLink;
