import * as React from "react";
import type { NextPage } from "next";

import { ContentContainer } from "src/containers/Content/ContentContainer";
import { CardContainer } from "src/containers/Card/CardContainer";
import { ContactForm } from "src/containers/ContactForm/ContactForm";
import { MusicPreview } from "src/containers/MusicPreview/MusicPreview";
import { BlockContainer } from "src/containers/Block/BlockContainer";
import { ProfileContainer } from "src/containers/Profile/ProfileContainer";

const Home: NextPage = () => {
	const urls = [
		"https://soundcloud.com/zarb/sydney-lockdown-session-going-mad-17-08-2021?si=d93c82733d7d4fb7a6fcf3e106eafce8",
		"https://soundcloud.com/zarb/deleh-khodam?si=721aa4e2c2e343fd9540ee12b3e2e5bd",
		"https://soundcloud.com/zarb/familia?si=7119f609d87e4925ac80047a65ed48e9",
	];

	return (
		<ContentContainer>
			<BlockContainer small />
			<MusicPreview urls={urls} />
			<ProfileContainer />
			<ContactForm />
		</ContentContainer>
	);
};

export default Home;
