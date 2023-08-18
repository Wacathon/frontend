import CardPage from "./pages/CardPage";
import Navigation from "./pages/Navigation";

function App() {
	return (
		<div className="d-flex flex-row">
			<Navigation />
			<CardPage />
			<div style={{ width: 200 }}></div>
		</div>
	);
}

export default App;
