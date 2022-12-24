import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputComponent from "./index";

export default {
	title: "Components/Input",
	component: InputComponent,
	args: {
		onChange: () => {},
		onBlur: () => {},
		errors: [],
		touched: [],
		name: "inputTest",
		label: "Label do input"
	},
	argTypes: { }
} as ComponentMeta<typeof InputComponent>;

export const Default: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;
