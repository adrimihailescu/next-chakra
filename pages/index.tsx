import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import Banner from "../components/banner";

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
			<div>
				<NavBar />
				<Banner />
			</div>
		</div>
	);
};

export default Home;
