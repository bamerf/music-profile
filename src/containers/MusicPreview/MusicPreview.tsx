import * as React from "react";
import ReactPlayer from "react-player";
import { BlockContainer } from "src/containers";

interface ComponentProps {
	urls: string[];
}
const MusicPreview: React.FC<ComponentProps> = ({ urls }) => (
	<BlockContainer>
		<div className="flex-col justify-center items-center gap-6">
			{urls &&
				urls.map((url, index) => (
					<ReactPlayer
						key={index}
						url={url}
						height="160px"
						className="mb-6"
						// config={{ soundcloud: { options: { color: "#0066CC" } } }}
					/>
				))}
		</div>
	</BlockContainer>
);

export default MusicPreview;
