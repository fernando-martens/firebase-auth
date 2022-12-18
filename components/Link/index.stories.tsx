import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkComponent from "./index";

export default {
	title: "Components/Link",
	component: LinkComponent,
	args: {
		name: "Home",
		href: "./",
		colorScheme: "blue",
		size: "md"
	},
	argTypes: { }
} as ComponentMeta<typeof LinkComponent>;

export const Default: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />;
