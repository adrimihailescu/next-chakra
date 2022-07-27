import {
	Box,
	Stack,
	Container,
	useColorModeValue,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					<Stack align={"flex-start"}>
						<h2>Company</h2>
						<Link href={"#"}>About Us</Link>
						<Link href={"#"}>Careers</Link>
						<Link href={"#"}>Cookies Policy</Link>
						<Link href={"#"}>Privacy Policy</Link>
					</Stack>

					<Stack align={"flex-end"}>
						<h2>Helpful Resources</h2>
						<Link href={"#"}>Contact Us</Link>
						<Link href={"#"}>Support</Link>
						<Link href={"#"}>FAQs</Link>
					</Stack>

					<Stack align={"flex-end"}>
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
					<Text>© 2022 Calmly Resolve. All rights reserved</Text>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
