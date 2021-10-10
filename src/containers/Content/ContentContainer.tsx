import * as React from "react";

interface ComponentProps {}
export const ContentContainer: React.FC<ComponentProps> = ({ children }) => (
	<section className="w-5/6 mx-auto h-full">{children}</section>
);
