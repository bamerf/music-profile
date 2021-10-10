import * as React from "react";

import { HeaderContainer } from "src/containers/Header/HeaderContainer";
import { FooterContainer } from "src/containers/Footer/FooterContainer";
import styles from "./mainLayout.module.scss";

interface ComponentProps {}

export const MainLayout: React.FC<ComponentProps> = ({ children }) => (
	<div className="antialiased flex flex-col min-h-screen justify-between">
		<HeaderContainer />
		<main className="bg-black">
			<>{children}</>
		</main>
		<FooterContainer />
	</div>
);
