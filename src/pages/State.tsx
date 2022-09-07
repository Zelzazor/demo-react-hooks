import { UseState } from "../components/app"

export const State = () => {
    return (
        <div className="container mt-5 d-flex flex-column">
            <h1>useState</h1>
            <p className="mx-2">useState es un hook básico de React. Es útil para poder tener valores que son el estado del componente, de tal modo que si se actualiza dicho valor, el componente se renderiza con el nuevo valor correspondiente.</p>
            <div className="d-flex justify-content-center">
                <UseState noLink/>
            </div>
        </div>
    )
}