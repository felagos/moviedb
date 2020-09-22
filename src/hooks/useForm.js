import { useState } from "react";

export const useForm = (form = {}) => {
	const [values, setValues] = useState(form);

	const handleChange = (evt) => {
		const { target } = evt;
		setValues({
			...values,
			[target.name]: target.value
		});
	}

	return [values, handleChange];
};
