import * as React from "react";

const FooterContainer = () => (
	<footer className="text-center py-8 text-sm shadow-lg bg-black text-white">
		© Copyright {new Date().getFullYear()} Zarb
		<span role="img" aria-label="Love" className="ml-1">
			♥
		</span>
	</footer>
);

export default FooterContainer;
