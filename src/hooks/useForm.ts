import React, { useState } from "react";

interface ComponentProps {
	handleSubmit: any;
}

export const useForm: React.FC<ComponentProps> = (submitCallback) => {
	const [state, setState] = useState({});

	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		submitCallback();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
