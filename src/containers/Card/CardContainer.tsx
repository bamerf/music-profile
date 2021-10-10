import * as React from "react";

interface ComponentProps {}

export const CardContainer: React.FC<ComponentProps> = ({ children }) => (
	<div className="w-3/5 mx-auto rounded-sm bg-white">{children}</div>
);
