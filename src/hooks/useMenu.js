import { useState } from "react";

export const useMenu = (value = false) => {
	const [open, setOpen] = useState(value);

	const handleOpenMenu = () => {
		setOpen(true);
	}

	const handleCloseMenu = () => {
		setOpen(false);
	}

	return [open, handleOpenMenu, handleCloseMenu];
}
