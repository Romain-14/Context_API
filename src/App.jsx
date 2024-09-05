import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import Header from "./Components/Header";

function App() {

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/auth"
					element={<Auth />}
				/>
			</Routes>

			<main>
				<h2>on révise pour demain !!</h2>
			</main>
		</>
	);
}

export default App;
