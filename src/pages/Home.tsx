import { UseEffect, UseReducer, UseState } from "../components/app"

export const Home = () => {
    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
        <h1>¡Bienvenido al uso de React hooks!</h1>
        <p className="w-50">En esta pequeña demostración, buscamos instruir en el uso de Hooks de React. Esta demostración tendrá pequeños demos que serán puestos en los respectivos componentes donde se explicarán cada uno.</p>
        <div className="d-flex w-75 justify-content-around">
            <UseState />
            <UseEffect />
            <UseReducer />
        </div>
        </div>
    )
}