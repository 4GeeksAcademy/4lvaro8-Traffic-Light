import React from "react";
import { useState } from "react";
import Button from "./buttons"




//create your first component
const Luz = () => {
	const [select, setSelect] = useState("")
	const [opened, setOpened] = useState(false);

	/** Cambia el color seleccionado
	 * 
	 * @param {color} string
	 */
	function ChangeColor(color) {
		setSelect(color)
	}


	/** Alterna los colores del semáforo
	 * 
	 */
	function nextColor() {
		select === "redLight"
			? setSelect("yellowLight")
			: select === "yellowLight"
				? setSelect("greenLight")
				: select === ("greenLight")
					? setSelect("purpleLight")
					: setSelect("redLight")
	}


	return !opened ? (
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

			<Button
				btnAlternate={nextColor}
				btnPurple={() => setOpened(true)}
			/>
		</>
	) : (
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

				<div className={`purpleLight ${select == "purpleLight" ? "lightP" : ""}`}
					onClick={() => ChangeColor("purpleLight")}
				></div>
			</div>

			<Button
				btnAlternate={nextColor}
				btnPurple={() => setOpened(false)}
			/>

			<div className="alert alert-info d-flex justify-content-center" role="alert">
				<strong>Cuidado!</strong> Que viene el morado.
			</div>

		</>
	);
};

export default Luz;
