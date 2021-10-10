import * as React from "react";

import styles from "./blockContainer.module.scss";

export const BlockContainer: React.FC = ({ children }) => (
	<section className={`flex justify-center items-center ${styles.root}`}>
		{children}
	</section>
);
