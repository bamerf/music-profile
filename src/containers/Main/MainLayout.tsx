import * as React from "react";

import { HeaderContainer, FooterContainer } from "src/containers";

const MainLayout: React.FC = ({ children }) => (
	<div className="antialiased flex flex-col min-h-screen justify-between">
		<HeaderContainer />
		<main className="bg-black">
			<>{children}</>
		</main>
		<FooterContainer />
	</div>
);

export default MainLayout;
