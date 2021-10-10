import * as React from "react";
import cn from "clsx";

import styles from "./blockContainer.module.scss";

interface ComponentProps {
	small?: boolean;
}

const BlockContainer: React.FC<ComponentProps> = ({ children, small }) => (
	<section
		className={`flex justify-center items-center ${styles.root} ${cn({
			[styles.small]: small,
		})}`}
	>
		{children}
	</section>
);

export default BlockContainer;
