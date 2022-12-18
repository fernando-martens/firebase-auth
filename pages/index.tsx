import React from "react";
import Link from "next/link";

const IndexPage = () => 
	<>
		<h1>Hello Next.js 👋</h1>
		<p>
			<Link href="/about">About</Link>
		</p>
	</>		
;

export default IndexPage;
