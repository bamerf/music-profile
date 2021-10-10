import * as React from "react";
import type { NextPage } from "next";

import { ContentContainer, CardContainer, ContactForm } from "src/containers";

const Contact: NextPage = () => {
	return (
		<ContentContainer>
			<CardContainer>
				<ContactForm />
			</CardContainer>
		</ContentContainer>
	);
};

export default Contact;
