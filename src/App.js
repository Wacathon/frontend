import { useState } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<div className="app-container">
			<AppRouter isLoggedIn={isLoggedIn} />
		</div>
	);
}

export default App;
