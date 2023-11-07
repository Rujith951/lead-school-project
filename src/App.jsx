import React from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
	const pci = useSelector(state => state.pci);
	const loading = pci.loading;

	function renderLogic() {
		if (loading) return <Loading />;
		else if (pci.error) return <Error error={pci.error} />;
		else if (Object.keys(pci.data).length === 0) return <Message />;
		else return <Display />;
	}

	return (
		<div className="h-screen  w-screen">
			<Input />
			{renderLogic()}
		</div>
	);
}

const Error = ({ error }) => (
	<div className="text-red-500 font-semibold font-sans text-xl grid place-items-center h-[90%]">
		{error}
	</div>
);

const Message = () => (
	<div className="h-[90%] grid place-items-center text-2xl font-semibold">
		Please enter a postal code and submit to see data.
	</div>
);

export default App;
