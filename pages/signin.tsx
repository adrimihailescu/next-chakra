import {
	Button,
	Flex,
	Heading,
	Input,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import NavBar from "../components/navbar";

const Signin = () => {
	const formBackground = useColorModeValue("gray.100", "gray.900");
	const router = useRouter();

	const handleSignIn = (e: any) => {
		e.preventDefault();
		router.push("/");
		console.log("clicked!");
	};
	return (
		<Layout>
			<Head>
				<title>Signin</title>
			</Head>
			<Box borderRadius="sm" color="teal">
				<Flex
					height="100vh"
					alignItems="center"
					justifyContent="center"
					backgroundColor={"gray.300"}
				>
					<Flex
						direction="column"
						background={formBackground}
						p={12}
						rounded={6}
					>
						<Heading mb={6}>Sign In</Heading>
						<Input
							placeholder="your@email.com"
							variant="filled"
							mb={3}
							type="email"
						/>
						<Input
							placeholder="********"
							variant="filled"
							mb={6}
							type="password"
						/>
						<Button
							backgroundColor={"teal.500"}
							color={"white"}
							mb={6}
							onClick={handleSignIn}
						>
							Sign In
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Layout>
	);
};
export default Signin;
