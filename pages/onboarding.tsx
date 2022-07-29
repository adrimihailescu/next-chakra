import React, { useEffect } from "react";
import StepZero from "../components/app-steps/step-zero";
import StepOne from "../components/app-steps/step-one";
import StepTwo from "../components/app-steps/step-two";
import StepThree from "../components/app-steps/step-three";
import StepFour from "../components/app-steps/step-four";
import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";
import ProgressBar from "../components/app-steps/progress-bar";
import StepFive from "../components/app-steps/step-five";

const stepSwitch = (
	step: number,
	stepHandler: React.Dispatch<React.SetStateAction<number>>
) => {
	switch (step) {
		case 1:
			return <StepOne stepHandler={stepHandler} />;
		case 2:
			return <StepTwo stepHandler={stepHandler} />;
		case 3:
			return <StepThree stepHandler={stepHandler} />;
		case 4:
			return <StepFour stepHandler={stepHandler} />;
		case 5:
			return <StepFive stepHandler={stepHandler} />;
		case 0:
		default:
			return <StepZero stepHandler={stepHandler} />;
	}
};

const Welcome = () => {
	const [activeComponent, setActiveComponent] = useState<number>(1);

	return (
		<Layout>
			<Head>
				<title>Welcome To Calmly</title>
			</Head>
			{activeComponent > 0 && (
				<ProgressBar
					start={1}
					end={5}
					current={activeComponent}
					stepHandler={setActiveComponent}
				/>
			)}
			{stepSwitch(activeComponent, setActiveComponent)}
		</Layout>
	);
};

export default Welcome;
