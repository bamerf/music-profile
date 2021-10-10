import * as React from "react";

export const FooterContainer = () => (
	<footer className="text-center py-8 text-sm shadow-lg bg-black text-white">
		© Copyright {new Date().getFullYear()} Zarb
		<span role="img" aria-label="Love" className="ml-1">
			♥
		</span>
	</footer>
);
