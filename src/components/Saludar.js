import React from "react";

export default function Saludar(props) {
    console.log(props.userInfo.nombre);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);

    /**Asignacion por Destructuring saca la info de una var, const, let para acceder directamente al valor de la variable y no acceder al valor por niveles como en los console anteriores */
    const { userInfo, saludarFn } = props;
    const { nombre } = userInfo;
    console.log(props);
    console.log(userInfo);

    /**Props por defecto */
    // const { nombre = "Anonimo" } = userInfo;

    return (
        <div>
            <h2>Hi {props.userInfo.nombre} tiene {props.userInfo.edad} años y su color favorito es     {props.userInfo.color}
            </h2>

            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Click me</button>
            <br /><br />
            <button onClick={() => props.saludarFn(nombre)}>Asignacion por Destructuring</button>
        </div>
    );
}