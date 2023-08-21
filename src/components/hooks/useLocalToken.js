export const getLocalToken = (navigate) => {
	const accessToken = localStorage.getItem("accessToken");
	if (!accessToken) {
		navigate("/login", { replace: true });
	}
	return accessToken;
};
