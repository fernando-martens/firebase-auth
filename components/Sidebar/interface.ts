
import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import { INavItemProps } from "../../utils/navItems";

export interface ISidebar{
    children: ReactNode;
	options: Array<INavItemProps>;
}

export interface SidebarProps extends BoxProps {
    onClose: () => void;
    options: Array<INavItemProps>;
}
  
export interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}

export interface MobileProps extends FlexProps {
    onOpen: () => void;
}
