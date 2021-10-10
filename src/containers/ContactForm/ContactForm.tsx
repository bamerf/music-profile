import * as React from "react";
import cn from "clsx";

import styles from "./contactForm.module.scss";

import PayButton from "src/components/PayButton";
import PayInput from "src/components/PayInput/PayInput";
import PayTextArea from "src/components/PayTextArea/PayTextArea";
import { BlockContainer } from "../Block/BlockContainer";
import { useForm } from "src/hooks/useForm";

interface ComponentProps {}

const formKeys = {
	email: "email",
	message: "message",
};

export const ContactForm: React.FC<ComponentProps> = () => {
	const register = () => {
		console.log(values);
	};

	const [values, handleChange, handleSubmit] = useForm(register);

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
