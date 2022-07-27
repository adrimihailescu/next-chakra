import React from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./navbar";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<NavBar />
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
