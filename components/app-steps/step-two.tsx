import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { stepProps } from "./types";

const StepTwo: React.FC<stepProps> = ({ stepHandler, currentStep }) => {
	return (
		<Box>
			<Text>Step Two</Text>
			<Button
				backgroundColor={"teal.500"}
				color={"white"}
				onClick={() => stepHandler(currentStep + 1)}
			>
				Continue
			</Button>
		</Box>
	);
};

export default StepTwo;
