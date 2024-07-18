import React from "react";


const Button = (props) => {

    return (
        <div className="buttons-container">
            <button className="btnAlternate" onClick={props.btnAlternate}>Siguiente Color</button>
            <button className="btnPurple" onClick={props.btnPurple}>Semáforo morado</button>
        </div>
    )

}



export default Button;