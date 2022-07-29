import React from "react";
import {
	Box,
	Button,
	Text,
	VStack,
	HStack,
	Stack,
	Input,
	Avatar,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { stepProps } from "./types";

const StepOne: React.FC<stepProps> = ({ stepHandler, currentStep }) => {
	return (
		<Box>
			<VStack align={"flex-start"}>
				<Text as="h2" fontSize={"30px"} pt={21} fontWeight={"bold"}>
					Tell us about yourself
				</Text>
				<form>
					<FormControl>
						<FormLabel pt={"16px"} fontWeight={"bold"}>
							Your full name
						</FormLabel>
						<Input type={"text"}></Input>
					</FormControl>
					<Stack>
						<Text
							fontWeight={"700"}
							fontSize={"24px"}
							lineHeight={"1.4"}
							height={"68px"}
							top={"308px"}
						>
							What is the best way to get in touch?
						</Text>
					</Stack>
					<HStack width={"100%"} alignItems={"end"} spacing={"22px"}>
						<Avatar src="https://fakeimg.pl/640x360" />
						<FormControl>
							<FormLabel pt={"16px"}>Text</FormLabel>
							<Input type={"text"}></Input>
						</FormControl>
					</HStack>
					<HStack width={"100%"} alignItems={"end"} spacing={"22px"}>
						<Avatar src="https://fakeimg.pl/640x360" />
						<Stack width={"100%"}>
							<FormLabel pt={"16px"}>Call</FormLabel>
							<Input type={"number"}></Input>
						</Stack>
					</HStack>
					<HStack width={"100%"} alignItems={"end"} spacing={"22px"}>
						<Avatar src="https://fakeimg.pl/640x360" />
						<Stack width={"100%"}>
							<FormLabel pt={"16px"}>Email</FormLabel>
							<Input type={"email"}></Input>
						</Stack>
					</HStack>
					<HStack width={"100%"} alignItems={"end"} spacing={"22px"} pb="60px">
						<Avatar src="https://fakeimg.pl/640x360" />
						<Stack width={"100%"}>
							<FormLabel pt={"16px"}>Other</FormLabel>
							<Input type={"text"} placeholder="Please specify"></Input>
						</Stack>
					</HStack>

					<Button
						backgroundColor={"#319795"}
						color={"white"}
						onClick={() => stepHandler(currentStep + 1)}
						borderRadius={"6px"}
						height={"48px"}
						width={"100%"}
						type={"submit"}
					>
						Next
					</Button>
				</form>
			</VStack>
		</Box>
	);
};

export default StepOne;
