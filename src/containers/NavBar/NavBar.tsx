import * as React from "react";
import Link from "next/link";
import styles from "./navBar.module.scss";

export enum Paths {
	Home = "Home",
	Contact = "Contact",
}

interface ComponentProps {
	paths?: Paths[];
}

export const NavBar: React.FC<ComponentProps> = ({ paths }) => (
	<div className={`flex justify-center align-middle py-5 ${styles.root}`}>
		<h1>zarb</h1>
		{paths &&
			paths.map((path) => (
				<Link href={path === Paths.Home ? "/" : `/${path}`}>
					<a className="text-white">{path}</a>
				</Link>
			))}
	</div>
);
