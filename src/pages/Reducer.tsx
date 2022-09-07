import { UseReducer } from "../components/app"

export const Reducer = () => {
    return (
        <div className="container mt-5 d-flex flex-column">
            <h1>useReducer</h1>
            <p className="mx-2">El hook useReducer sirve como una forma alternativa de manipular estado en componentes funcionales. Altamente útil para desacoplar lógica de estado de la lógica de la UI.</p>
            <div className="d-flex justify-content-center">
                <UseReducer noLink/>
            </div>
        </div>
    )
}