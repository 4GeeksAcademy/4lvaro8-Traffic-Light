

import React from "react";
import { useState } from "react";





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
		select === "red"
			? setSelect("yellow")
			: select === "yellow"
				? setSelect("green")
				: select === ("green")
					? setSelect("purple")
					: setSelect("red")
	}


	return !opened ? (
		<>
			<div className="semaforo">
				<div className={`red light ${select == "red" ? "active" : ""}`}
					onClick={() => ChangeColor("red")}
				></div>

				<div className={`yellow light ${select == "yellow" ? "active" : ""}`}
					onClick={() => ChangeColor("yellow")}
				></div>

				<div className={`green light ${select == "green" ? "active" : ""}`}
					onClick={() => ChangeColor("green")}
				></div>
			</div>

			<div className="buttons-container">
				<button className="btnAlternate" onClick={nextColor}>Siguiente Color</button>
				<button className="btnPurple" onClick={() => setOpened(true)}>Semáforo morado</button>
			</div>
		</>
	) : (
		<>
			<div className="semaforo">

				<div className={`red light ${select == "red" ? "active" : ""}`}
					onClick={() => ChangeColor("red")}
				></div>

				<div className={`yellow light ${select == "yellow" ? "active" : ""}`}
					onClick={() => ChangeColor("yellow")}
				></div>

				<div className={`green light ${select == "green" ? "active" : ""}`}
					onClick={() => ChangeColor("green")}
				></div>

				<div className={`purple light ${select == "purple" ? "active" : ""}`}
					onClick={() => ChangeColor("purple")}
				></div>
			</div>

			<div className="buttons-container">
				<button className="btnAlternate" onClick={nextColor}>Siguiente Color</button>
				<button className="btnPurple" onClick={() => setOpened(false)}>Semáforo morado</button>
			</div>

			<div className="alert alert-info d-flex justify-content-center" role="alert">
				<strong>Cuidado!</strong> Que viene el morado.
			</div>

		</>
	);
};

export default Luz;