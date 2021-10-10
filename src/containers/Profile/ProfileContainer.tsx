import * as React from "react";
import Image from "next/image";
import profilePic from "../../../public/img/profile/profile-pic-bam-filtered.png";

import { BlockContainer } from "../Block/BlockContainer";

import styles from "./profileContainer.module.scss";

export const ProfileContainer: React.FC = () => (
	<BlockContainer>
		<div className={styles.root}>
			<Image
				className={styles.image}
				alt="Profile Picture"
				src={profilePic}
				width={450}
				height={450}
			/>
			<h1 className={styles.text}>
				{" "}
				Zarb is a Techno DJ based in Sydney, Australia
			</h1>
		</div>
	</BlockContainer>
);
