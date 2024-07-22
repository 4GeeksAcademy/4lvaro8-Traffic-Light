import React from "react";
import { useState } from "react";




//create your first component
const Luz = () => {
	const [select, setSelect] = useState("")
	const [isOpened, setIsOpened] = useState(false);
	let colores = ["red", "yellow", "green", "purple"];


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



	return (
		<>
			<div className="semaforo">

				<div className={`red light ${select == "red" ? "active" : ""}`} onClick={() => setSelect(colores[0])}></div>

				<div className={`yellow light ${select == "yellow" ? "active" : ""}`} onClick={() => setSelect(colores[1])}></div>

				<div className={`green light ${select == "green" ? "active" : ""}`} onClick={() => setSelect(colores[2])}></div>

				{isOpened && <div className={`purple light ${select == "purple" ? "active" : ""}`} onClick={() => setSelect(colores[3])}></div>}

			</div>

			<div className="buttons-container">
				<button className="btnAlternate" onClick={nextColor}>Siguiente Color</button>
				<button className="btnPurple" onClick={() => setIsOpened(isOpened ? false : true)}>Semáforo morado</button>
			</div>

			{isOpened && <div className="alert alert-info d-flex justify-content-center" role="alert"><strong>Cuidado!</strong> Que viene el morado.</div>}

		</>
	);
};

export default Luz;
