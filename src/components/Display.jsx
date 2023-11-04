import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../redux/postal-code/actionCreator";

function Display() {
	const pci = useSelector(state => state.pci);
	const dispatch = useDispatch();
	const state = pci.data.places[0].state;

	const handleClear = () => {
		dispatch(clearData());
	};
	return (
		<div className="h-[80%] flex justify-center  items-center flex-col ">
			<div className="space-y-3">
				<h1>
					<span className="font-bold text-xl">Country : </span>
					{pci.data.country}
				</h1>
				<p>
					<span className="font-bold text-xl">State : </span> {state}
				</p>
				<div>
					<span className="font-bold text-xl">Places : </span>
					{pci.data.places.map(itm => {
						return <p key={itm["place name"]}>{itm["place name"]}</p>;
					})}
				</div>
			</div>
			<button
				onClick={handleClear}
				className="absolute bottom-5 right-10 w-[8%] py-2 rounded-[8px] bg-blue-400 hover:scale-105 shadow-lg"
			>
				Clear
			</button>
		</div>
	);
}

export default Display;
