import { Box, Image, Button, Container, Stack, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Banner = () => {
	const router = useRouter();
	const handleSignIn = (e: any) => {
		e.preventDefault();
		router.push("/signin");
		console.log("clicked!");
	};
	return (
		<Container display={"flex"} justifyContent={"center"} position={"relative"}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				flexDirection={"row"}
				backgroundColor={"gray.300"}
			>
				<Image
					src="/static/md.svg"
					alt="calmly banner"
					width={"100%"}
					backgroundSize={"cover"}
					backgroundPosition={"50% 50%"}
					position={"absolute"}
				/>
				<Button
					onClick={handleSignIn}
					position={"absolute"}
					display={"flex"}
					size={"lg"}
					w={"192px"}
					h={"48px"}
					left={"28px"}
					top={"634px"}
					background={"#319795"}
					borderRadius={"6px"}
				>
					Start
				</Button>
			</Box>
		</Container>
	);
};

export default Banner;
