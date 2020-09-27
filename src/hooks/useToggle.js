import { useState } from "react";

export const useToggle = (value = false) => {
	const [open, setOpen] = useState(value);

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return [open, handleOpen, handleClose];
}
