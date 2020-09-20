import { useState } from "react";

export const useToggle = (value = false) => {
	const [open, setOpen] = useState(value);

	const handleOpenMenu = () => {
		setOpen(true);
	}

	const handleCloseMenu = () => {
		setOpen(false);
	}

	return [open, handleOpenMenu, handleCloseMenu];
}
