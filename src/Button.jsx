import { useState } from "react";


function Button(){
    const [Contador, setContador] = useState(0);


    function visitar(){
        setContador(Contador+1);


    function zerarContador(){
        setContador(0);
    }
    }
    return(
        <div>
            <button onClick={visitar}>Clicar</button>
            <p>Contador de Visitas: {Contador}</p>
            <button onClick={() => {setContador(0)}}>Resetar count</button>
        </div>
        
    );
}

export default Button;