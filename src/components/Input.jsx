import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostalData } from "../redux/postal-code/actionCreator";

function Input() {
	const dispatch = useDispatch();
	const [pincode, setPincode] = useState("");

	const handleSubmit = () => {
		dispatch(getPostalData(pincode));
		setPincode("");
	};

	return (
		<div className="h-[10%] flex justify-end items-center space-x-5 pr-[40px] ">
			<input
				className="w-[200px] ring-2 focus:ring-blue-500 ring-blue-300 py-2 rounded-[8px] outline-none shadow-lg px-4"
				type="text"
				maxLength={6}
				value={pincode}
				onChange={e => {
					if (!isNaN(e.target.value)) {
						setPincode(e.target.value);
					}
				}}
				placeholder="Enter postal code "
			/>
			<button
				className=" w-[8%] py-2 rounded-[8px] bg-blue-400 hover:scale-105 shadow-lg"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</div>
	);
}

export default Input;
