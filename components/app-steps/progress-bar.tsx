import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import { progressProps } from "./types";

const ProgressBar: React.FC<progressProps> = ({
	start,
	end,
	currentStep,
	stepHandler,
}) => {
	const progressBarValues = Array.from(
		{ length: end },
		(_, elementIndex) => elementIndex + start
	);

	return (
		<Tabs
			variant={"soft-rounded"}
			align={"center"}
			pt={"20px"}
			index={currentStep - start}
		>
			<TabList>
				{progressBarValues.map((step, index) => {
					return (
						<Tab
							key={index}
							_selected={{ color: "#2C5282", bg: "#BEE3F8" }}
							onClick={() => stepHandler(step)}
							style={{ margin: "0 auto" }}
						>
							{step}
						</Tab>
					);
				})}
			</TabList>
		</Tabs>
	);
};

export default ProgressBar;
