import * as React from "react";
import ReactPlayer from "react-player";
import { BlockContainer } from "../Block/BlockContainer";

import styles from "./musicPreview.module.scss";

interface ComponentProps {
	urls: string[];
}
export const MusicPreview: React.FC<ComponentProps> = ({ urls }) => (
	<BlockContainer>
		<div className="flex-col justify-center items-center gap-6">
			{urls &&
				urls.map((url, index) => (
					<ReactPlayer
						key={index}
						url={url}
						height="160px"
						// config={{ soundcloud: { options: { color: "#0066CC" } } }}
					/>
				))}
		</div>
	</BlockContainer>
);
