import * as React from "react";

const CardContainer: React.FC = ({ children }) => (
	<div className="w-3/5 mx-auto rounded-sm bg-white">{children}</div>
);

export default CardContainer;
