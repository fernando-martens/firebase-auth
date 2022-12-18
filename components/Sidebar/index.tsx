import React from "react";
import { Box, Drawer, DrawerContent, Text, useDisclosure, useColorModeValue, Flex, CloseButton, Icon, Link, IconButton, HStack, Menu, MenuButton, Avatar, VStack, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { ISidebar, MobileProps, NavItemProps, SidebarProps } from "./interface";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";


const Sidebar: React.FC<ISidebar> = ({
	children,
	options
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
				options={options}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full">
				<DrawerContent>
					<SidebarContent onClose={onClose} options={options} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
		</Box>
	);
};

export default Sidebar;


const SidebarContent = ({ onClose, options, ...rest }: SidebarProps) => 
	<Box
		transition="3s ease"
		bg={useColorModeValue("white", "gray.900")}
		borderRight="1px"
		borderRightColor={useColorModeValue("gray.200", "gray.700")}
		w={{ base: "full", md: 60 }}
		pos="fixed"
		h="full"
		{...rest}>
		<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
			<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
			</Text>
			<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
		</Flex>
		{options.map((link) => 
			<NavItem key={link.name} icon={link.icon}>
				{link.name}
			</NavItem>
		)}
	</Box>
;


const NavItem = ({ icon, children, ...rest }: NavItemProps) => 
	<Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
		<Flex
			align="center"
			p="4"
			mx="4"
			borderRadius="lg"
			role="group"
			cursor="pointer"
			_hover={{
				bg: "cyan.400",
				color: "white"
			}}
			{...rest}>
			{icon && 
            <Icon
            	mr="4"
            	fontSize="16"
            	_groupHover={{
            		color: "white"
            	}}
            	as={icon}
            />
			}
			{children}
		</Flex>
	</Link>
    ;


const MobileNav = ({ onOpen, ...rest }: MobileProps) => 
	<Flex
		ml={{ base: 0, md: 60 }}
		px={{ base: 4, md: 4 }}
		height="20"
		alignItems="center"
		bg={useColorModeValue("white", "gray.900")}
		borderBottomWidth="1px"
		borderBottomColor={useColorModeValue("gray.200", "gray.700")}
		justifyContent={{ base: "space-between", md: "flex-end" }}
		{...rest}>
		<IconButton
			  display={{ base: "flex", md: "none" }}
			  onClick={onOpen}
			  variant="outline"
			  aria-label="open menu"
			  icon={<FiMenu />}
		/>
	  
		<Text
			  display={{ base: "flex", md: "none" }}
			  fontSize="2xl"
			  fontFamily="monospace"
			  fontWeight="bold">
			  Logo
		</Text>
	  
		<HStack spacing={{ base: "0", md: "6" }}>
			  <IconButton
				size="lg"
				variant="ghost"
				aria-label="open menu"
				icon={<FiBell />}
			  />
			  <Flex alignItems={"center"}>
				<Menu>
				  <MenuButton
						py={2}
						transition="all 0.3s"
						_focus={{ boxShadow: "none" }}>
						<HStack>
					  <Avatar
								size={"sm"}
								src={"https://github.com/fernando-martens.png"}
					  />
					  <VStack
								display={{ base: "none", md: "flex" }}
								alignItems="flex-start"
								spacing="1px"
								ml="2"
							>
								<Text fontSize="sm">Fernando Martens</Text>
								<Text fontSize="xs" color="gray.600">
						Admin
								</Text>
					  </VStack>
					  <Box display={{ base: "none", md: "flex" }}>
								<FiChevronDown />
					  </Box>
						</HStack>
				  </MenuButton>
				  <MenuList
						bg={useColorModeValue("white", "gray.900")}
						borderColor={useColorModeValue("gray.200", "gray.700")}>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuItem>Billing</MenuItem>
						<MenuDivider />
						<MenuItem>Sign out</MenuItem>
				  </MenuList>
				</Menu>
			  </Flex>
		</HStack>
	</Flex>
;
