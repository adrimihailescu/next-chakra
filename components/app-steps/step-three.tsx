import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { stepProps } from "./types";

const StepThree: React.FC<stepProps> = ({ stepHandler }) => {
	return (
		<Box>
			<Text>Step Three</Text>
			<Button
				backgroundColor={"teal.500"}
				color={"white"}
				onClick={() => stepHandler(4)}
			>
				Continue
			</Button>
		</Box>
	);
};

export default StepThree;
