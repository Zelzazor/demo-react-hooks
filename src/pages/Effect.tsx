import { UseEffect } from "../components/app"

export const Effect = () => {
    return (
        <div className="container mt-5 d-flex flex-column">
            <h1>useEffect</h1>
            <p className="mx-2">useEffect es un hook que nos permite realizar acciones durante cada momento del ciclo de vida de nuestro componente. Podemos ejecutar, pues, una funciona que se ejecuta cuando el componente es montado, cuando este se actualiza, cuando este se actualizará gracias al cambio de un estado específico, o cuando el componente será desmontado.</p>
            <div className="d-flex justify-content-center">
                <UseEffect noLink/>
            </div>
        </div>
    )
}