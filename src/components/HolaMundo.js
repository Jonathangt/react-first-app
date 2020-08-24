import React from "react";

export default function HolaMundo() {

    const miFuncion = () => {
        console.log("Funcion prueba");
    };


    return (
        /**El return siempre debe devolver un div con todo su contenido dentro 
         * O se puede devolver todo en un frame <> h1, h2--</>
        */

        <div>
            <h1>Hello World!!</h1>
        </div>
    );
}


export function AdiosMundo() {
    return (
        <div>
            <h1>Adios World!!</h1>
        </div>
    );
}

