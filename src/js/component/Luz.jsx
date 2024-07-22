

import React from "react";
import { useState } from "react";





//create your first component
const Luz = () => {
	const [select, setSelect] = useState("")
	const [isOpened, setIsOpened] = useState(false);
	let colors = ["red", "yellow", "green", "purple"]


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
				<div className={`red light ${select == "red" ? "active" : ""}`} onClick={() => setSelect("red")}></div>

				<div className={`yellow light ${select == "yellow" ? "active" : ""}`} onClick={() => setSelect("yellow")}></div>

				<div className={`green light ${select == "green" ? "active" : ""}`} onClick={() => setSelect("green")}></div>

				{isOpened && <div className={`purple light ${select == "purple" ? "active" : ""}`} onClick={() => setSelect("purple")}></div>}

			</div>

			<div className="buttons-container">
				<button className="btnAlternate" onClick={nextColor}>Siguiente Color</button>
				<button className="btnPurple" onClick={() => isOpened ? setIsOpened(false) : setIsOpened(true) }>Semáforo morado</button>
			</div>
		</>
	) 
};

export default Luz;