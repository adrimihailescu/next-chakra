import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { stepProps } from "./types";

const StepOne: React.FC<stepProps> = ({ stepHandler }) => {
	return (
		<Box>
			<Text>Step One</Text>
			<Button
				backgroundColor={"teal.500"}
				color={"white"}
				onClick={() => stepHandler(2)}
			>
				Continue
			</Button>
		</Box>
	);
};

export default StepOne;
