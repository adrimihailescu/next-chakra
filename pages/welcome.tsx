import React from "react";
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	VStack,
	Text,
	Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import Layout from "../components/layout";

const Welcome = () => {
	return (
		<Layout>
			<VStack align={"flex-start"}>
				<Box as="h2" fontSize={"30px"} pt={160} fontWeight={"bold"}>
					Welcome to Calmly
				</Box>
				<Text>We will send you a 6-digit verification code</Text>

				<Text>Enter your phone number</Text>
				<Stack spacing={4}>
					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							// eslint-disable-next-line react/no-children-prop
							children={<PhoneIcon color="gray.300" />}
						/>
						<Input type="tel" placeholder="Phone number" />
					</InputGroup>
					<Button width={"100%"} backgroundColor={"teal.500"} color={"white"}>
						Continue
					</Button>
				</Stack>
			</VStack>
		</Layout>
	);
};

export default Welcome;
