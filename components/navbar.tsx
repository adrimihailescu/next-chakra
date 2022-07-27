import React, { ReactNode } from "react";
import Link from "next/link";
import {
	Box,
	Image,
	useColorMode,
	useColorModeValue,
	Button,
	useDisclosure,
	Flex,
	Stack,
	Menu,
	MenuButton,
	Avatar,
	MenuList,
	Center,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} m={0}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box>
						<Image src="/static/logo.svg" alt="Calmly logo" />
					</Box>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu>
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"outline"}
									cursor={"pointer"}
									minW={0}
								>
									<HamburgerIcon />
									{/* <Avatar
										size={"sm"}
										src={"https://avatars.dicebear.com/api/male/username.svg"}
									/> */}
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={"https://avatars.dicebear.com/api/male/username.svg"}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>
										<Link href="/signin">Sign In</Link>
									</MenuItem>
									<MenuItem>
										<Link href="/">Logout</Link>
									</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default NavBar;
