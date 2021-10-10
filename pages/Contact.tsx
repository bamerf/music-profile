import * as React from "react";
import type { NextPage } from "next";

import cn from "clsx";

import styles from "./contact.module.scss";
import { ContentContainer } from "src/containers/Content/ContentContainer";
import { CardContainer } from "src/containers/Card/CardContainer";
import { ContactForm } from "src/containers/ContactForm/ContactForm";

const Contact: NextPage = () => {
	return (
		<ContentContainer>
			{/* text infot for contact page */}
			<CardContainer>
				<ContactForm />
			</CardContainer>
		</ContentContainer>
	);
};

export default Contact;
