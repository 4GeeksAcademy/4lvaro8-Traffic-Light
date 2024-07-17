import React from "react";
import { useState } from "react";




//create your first component
const Luz = () => {
	const [select, setSelect] = useState("")

	let ChangeColor = (color) => {
		setSelect(color)
	}


	return (
		<>
			<div className="semaforo">
				<div className={`redLight ${select == "redLight" ? "lightR" : ""}`}
					onClick={() => ChangeColor("redLight")}
				></div>

				<div className={`yellowLight ${select == "yellowLight" ? "lightY" : ""}`}
					onClick={() => ChangeColor("yellowLight")}
				></div>

				<div className={`greenLight ${select == "greenLight" ? "lightG" : ""}`}
					onClick={() => ChangeColor("greenLight")}
				></div>
			</div>
		</>
	);
};

export default Luz;
