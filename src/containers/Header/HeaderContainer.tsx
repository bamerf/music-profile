import * as React from "react";
import { NavBar } from "src/containers/NavBar/NavBar";

export const HeaderContainer: React.FC = ({ children }) => (
	<header className="bg-black">
		<NavBar />
		{children}
	</header>
);
