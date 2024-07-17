import React from "react";
import { useState } from "react";




//create your first component
const Luz = () => {
	const [select, setSelect] = useState("")

	function ChangeColor(color) {
		setSelect(color)
	}

	function nextColor() {
		select === "redLight"
			? setSelect("yellowLight")
			: select === "yellowLight"
				? setSelect("greenLight")
				: setSelect("redLight")
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

			<button className="btn" onClick={nextColor}>Siguiente Color</button>
		</>
	);
};

export default Luz;
