import * as React from "react";
import type { NextPage } from "next";

import {
	ContentContainer,
	ContactForm,
	MusicPreview,
	BlockContainer,
	ProfileContainer,
} from "src/containers";

const Home: NextPage = () => {
	const URLS = [
		"https://soundcloud.com/zarb/sydney-lockdown-session-going-mad-17-08-2021?si=d93c82733d7d4fb7a6fcf3e106eafce8",
		"https://soundcloud.com/zarb/deleh-khodam?si=721aa4e2c2e343fd9540ee12b3e2e5bd",
		"https://soundcloud.com/zarb/familia?si=7119f609d87e4925ac80047a65ed48e9",
	];

	return (
		<ContentContainer>
			<BlockContainer small />
			<MusicPreview urls={URLS} />
			<ProfileContainer />
			<ContactForm />
		</ContentContainer>
	);
};

export default Home;
