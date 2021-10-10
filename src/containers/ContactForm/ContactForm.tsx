import * as React from "react";

import styles from "./contactForm.module.scss";

import { PayButton, PayInput, PayTextArea } from "src/components";

import { BlockContainer } from "src/containers";
import { useForm } from "src/hooks/useForm";

const formKeys = {
	email: "email",
	message: "message",
};

const ContactForm: React.FC = () => {
	const submitCallback = () => {
		console.log("onSubmit cb: ", values);
	};

	const [values, handleChange, handleSubmit] = useForm(submitCallback);

	React.useEffect(() => {
		console.log("useEffect(): ", values);
	}, [values]);

	return (
		<BlockContainer>
			<form
				className={`flex flex-col justify-center w-1/2 gap-9 h-full mx-auto ${styles.form}`}
				onSubmit={handleSubmit}
			>
				<h1 className="mx-auto">CONTACT</h1>
				<PayInput
					name={formKeys.email}
					value={values[formKeys.email]}
					onChange={handleChange}
					label="EMAIL"
					hasDarkBackground
				/>
				<PayTextArea
					name={formKeys.message}
					value={values[formKeys.message]}
					onChange={handleChange}
					label="MESSAGE"
					rows={5}
				/>
				<PayButton type="submit" className="mx-auto" color="primary">
					Submit
				</PayButton>
			</form>
		</BlockContainer>
	);
};

export default ContactForm;
