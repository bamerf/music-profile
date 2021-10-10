import * as React from "react";
import Image from "next/image";
import profilePic from "../../../public/img/profile/profile-pic-bam-filtered.png";
import { RiSoundcloudLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

import { BlockContainer } from "src/containers";

import styles from "./profileContainer.module.scss";

const ProfileContainer: React.FC = () => (
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
				<div className="flex">
					<a
						target="_blank"
						href="https://soundcloud.com/zarb"
						rel="noopener noreferrer"
					>
						<RiSoundcloudLine
							className={styles.socialMedia}
							color="white"
							size="36px"
						/>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/zarbsound"
						rel="noopener noreferrer"
					>
						<FiInstagram
							className={styles.socialMedia}
							color="white"
							size="32px"
						/>
					</a>
				</div>
			</h1>
		</div>
	</BlockContainer>
);

export default ProfileContainer;
