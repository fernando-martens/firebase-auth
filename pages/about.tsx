import React from "react";
import { Badge } from "@chakra-ui/react";
import Link from "next/link";

const AboutPage = () => 
	<>
		<Badge>About</Badge>
		<p>This is the about page</p>
		<p>
			<Link href="/">Go home</Link>
		</p>
	</>	
;

export default AboutPage;
