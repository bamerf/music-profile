import React, { useState } from "react";

type HandleChangeEvent = React.ChangeEvent<
	HTMLTextAreaElement | HTMLInputElement
>;

type TUseForm = [
	{ [key: string]: any },
	(e: HandleChangeEvent) => void,
	(e: React.SyntheticEvent) => void
];

export const useForm = (submitCallback: () => void): TUseForm => {
	const [state, setState] = useState({});

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		submitCallback();
	};

	const handleChange = (event: HandleChangeEvent) => {
		event.persist();
		// console.log(event.target.value);
		console.log(event.target.name);
		setState((currentState) => ({
			...currentState,
			[event.target.name]: event.target.value,
		}));
	};

	return [state, handleChange, handleSubmit];
};
