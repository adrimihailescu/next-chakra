import React, { useState } from "react";
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
	PinInput,
	PinInputField,
	HStack,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { stepProps } from "./types";

const StepZero: React.FC<stepProps> = ({ stepHandler }) => {
	const [mobileSubmitted, setMobileSubmitted] = useState(false);
	return (
		<div>
			<VStack align={"flex-start"}>
				<Box as="h2" fontSize={"30px"} pt={160} fontWeight={"bold"}>
					Welcome to Calmly
				</Box>

				{!mobileSubmitted && (
					<>
						<Text pb={"60px"}>
							We will send you a 6-digit verification code
						</Text>
						<Text>Enter your mobile number</Text>
						<Stack spacing={4}>
							<InputGroup width={"100%"}>
								<InputLeftElement
									pointerEvents="none"
									// eslint-disable-next-line react/no-children-prop
									children={<PhoneIcon color="gray.300" />}
								/>
								<Input type="tel" placeholder="Phone number" />
							</InputGroup>
							<Button
								backgroundColor={"#319795"}
								color={"white"}
								onClick={() => stepHandler(1)}
								borderRadius={"6px"}
								height={"48px"}
								width={"380px"}
							>
								Continue
							</Button>
						</Stack>
					</>
				)}
				{mobileSubmitted && (
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
				)}
			</VStack>
		</div>
	);
};

export default StepZero;
