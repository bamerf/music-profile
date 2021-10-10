import React, { useState } from "react";

type HandleChangeEvent = React.ChangeEvent<
	HTMLTextAreaElement | HTMLInputElement
>;

type UseFormType = [
	{ [key: string]: any },
	(e: HandleChangeEvent) => void,
	(e: React.SyntheticEvent) => void
];

export const useForm = (submitCallback: () => void): UseFormType => {
	const [state, setState] = useState({});

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		submitCallback();
	};

	const handleChange = (event: HandleChangeEvent) => {
		event.persist();
		setState((currentState) => ({
			...currentState,
			[event.target.name]: event.target.value,
		}));
	};

	return [state, handleChange, handleSubmit];
};
