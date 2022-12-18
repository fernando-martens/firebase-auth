import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings
} from "react-icons/fi";
import { IconType } from "react-icons";

export interface INavItemProps {
    name: string;
    icon: IconType;
  }

export const NavItems: Array<INavItemProps> = [
	{ name: "Home", icon: FiHome },
	{ name: "Trending", icon: FiTrendingUp },
	{ name: "Explore", icon: FiCompass },
	{ name: "Favourites", icon: FiStar },
	{ name: "Settings", icon: FiSettings }
];
