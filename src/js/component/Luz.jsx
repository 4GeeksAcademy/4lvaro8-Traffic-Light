import React, { useState } from "react";


//create your first component
const Luz = () => {
	const [select, setSelect] = useState("");
	const [isOpened, setIsOpened] = useState(false);
	let colors = ["red", "yellow", "green", "purple"]


/** Alterna los colores del semáforo
 * 
 */
function nextColor() {
	const currentIndex = colors.indexOf(select);
	const nextIndex = (currentIndex + 1) % colors.length;
	setSelect(colors[nextIndex]);
}


	return (
		<>
			<div className="semaforo">
				<div className={`red light ${select == "red" ? "active" : ""}`} onClick={() => setSelect(colors[0])}></div>

				<div className={`yellow light ${select == "yellow" ? "active" : ""}`} onClick={() => setSelect(colors[1])}></div>

				<div className={`green light ${select == "green" ? "active" : ""}`} onClick={() => setSelect(colors[2])}></div>

				{isOpened && <div className={`purple light ${select == "purple" ? "active" : ""}`} onClick={() => setSelect(colors[3])}></div>}

			</div>

			<div className="buttons-container">
				<button className="btnAlternate" onClick={nextColor}>Siguiente Color</button>
				<button className="btnPurple" onClick={() => isOpened ? setIsOpened(false) : setIsOpened(true)}>Semáforo morado</button>
			</div>
		</>
	)
};

export default Luz;