import {
	Box,
	Stack,
	Container,
	useColorModeValue,
	SimpleGrid,
	Text,
	Image,
	Input,
	IconButton,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={12}>
					<Stack align={"flex-start"}>
						<h2>Company</h2>
						<Link href={"#"}>About Us</Link>
						<Link href={"#"}>Careers</Link>
						<Link href={"#"}>Cookies Policy</Link>
						<Link href={"#"}>Privacy Policy</Link>
					</Stack>

					<Stack align={"flex-start"}>
						<h2>Helpful Resources</h2>
						<Link href={"#"}>Contact Us</Link>
						<Link href={"#"}>Support</Link>
						<Link href={"#"}>FAQs</Link>
					</Stack>

					<Stack align={"flex-start"}>
						<h2>Social</h2>
						<Stack direction={"row"}>
							<Link href={"/"}>
								<a>
									<AiFillLinkedin />
								</a>
							</Link>
							<Link href={"/"}>
								<a>
									<BsInstagram />
								</a>
							</Link>
							<Link href={"/"}>
								<a>
									<AiFillLinkedin />
								</a>
							</Link>
						</Stack>
					</Stack>
					<Stack>
						<h2>Subscribe</h2>
						<Stack direction={"row"}>
							<Input placeholder={"Your email address"} />
							<IconButton icon={<BiMailSend />} aria-label={""} />
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>

			<Box
				borderTopWidth={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ md: "space-between" }}
					align={{ md: "center" }}
				>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
						gap={"4"}
					>
						<Image src="/static/logo.svg" alt="Calmly logo" />
						<Text>© 2022 Calmly Resolve. All rights reserved</Text>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
