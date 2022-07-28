import React from "react";
import {
	Box,
	Button,
	Text,
	VStack,
	Stack,
	PinInput,
	PinInputField,
	HStack,
} from "@chakra-ui/react";
import { stepProps } from "./types";

const StepOne: React.FC<stepProps> = ({ stepHandler }) => {
	return (
		<Box>
			<Text>Step One</Text>
			<VStack align={"flex-start"}>
				<Box as="h2" fontSize={"30px"} pt={160} fontWeight={"bold"}>
					Welcome to Calmly
				</Box>
				<Text pb={"60px"}>We will send you a 6-digit verification code</Text>

				<Text>Enter your mobile number</Text>
				<Stack spacing={4}>
					<HStack>
						<PinInput type="alphanumeric" mask>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
					</HStack>
					<Button
						width={"100%"}
						backgroundColor={"teal.500"}
						color={"white"}
						onClick={() => stepHandler(1)}
					>
						Continue
					</Button>
				</Stack>
			</VStack>
		</Box>
	);
};

export default StepOne;
