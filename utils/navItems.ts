import {
	FiHome
} from "react-icons/fi";
import { IconType } from "react-icons";

export interface INavItemProps {
    name: string;
    icon: IconType;
  }

export const NavItems: Array<INavItemProps> = [
	{ name: "Profile", icon: FiHome },
	{ name: "List Items", icon: FiHome }
];
