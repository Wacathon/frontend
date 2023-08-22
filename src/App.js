import { useState } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("accessToken") ? true : false
	);

	return (
		<div className="app-container">
			<AppRouter isLoggedIn={isLoggedIn} />
		</div>
	);
}

export default App;
