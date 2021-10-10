import * as React from "react";
import { NavBar } from "src/containers";

const HeaderContainer: React.FC = ({ children }) => (
	<header className="bg-black">
		<NavBar />
		{children}
	</header>
);

export default HeaderContainer;
