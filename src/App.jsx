import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Blog from "./components/Blog";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="">
			<Navbar />
			<Hero />
			<Blog />
		</div>
	);
}

export default App;
