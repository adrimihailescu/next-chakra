import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Next Chakra</title>
				<meta
					name="description"
					content="Playground app for next.js and chakra UI"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Box>
				{/* <Banner /> */}
				<main>Body of the homepage</main>
			</Box>
			<Footer />
		</div>
	);
};

export default Home;
