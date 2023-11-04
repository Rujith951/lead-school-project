import React from "react";
import Input from "./components/Input";
import Display from "./components/display";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
	const pci = useSelector(state => state.pci);
	const loading = pci.loading;
	return (
		<div className="h-screen  w-screen">
			<Input />
			{loading ? (
				<Loading />
			) : Object.keys(pci.data).length === 0 ? (
				<div className="h-[90%] grid place-items-center text-2xl font-semibold">
					Please enter a postal code and submit to see data.
				</div>
			) : (
				<Display />
			)}
		</div>
	);
}

export default App;
