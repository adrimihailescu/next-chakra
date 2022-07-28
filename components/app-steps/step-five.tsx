import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { stepProps } from "./types";

const StepFive: React.FC<stepProps> = ({ stepHandler }) => {
	return (
		<Box>
			<Text>Step Five</Text>
			<Button
				backgroundColor={"teal.500"}
				color={"white"}
				onClick={() => stepHandler(0)}
			>
				Continue
			</Button>
		</Box>
	);
};

export default StepFive;
