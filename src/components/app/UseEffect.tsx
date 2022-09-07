import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


export const UseEffect = () => {

    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        toast("Se montó el componente");
    }, [])

    useEffect(() => {
        toast("Se actualizó el componente");
        return () => {
            toast("Se desmontó el componente");
        }
    })

    useEffect(() => {
        toast("Se actualizó el componente por toggle: "+(toggle?"ON":"OFF"));
    }, [toggle])

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="text-center">
                <div>{toggle ? "ON" : "OFF"}</div>

                <button className="btn btn-primary" onClick={()=>setToggle(!toggle)}>Actualizar</button>
            </div>
            <div className="buttons d-flex justify-content-around">
                
            </div>
            <div className="card-body">
                <h5 className="card-title">useEffect</h5>
                <p className="card-text">
                    Maneja eventos del ciclo de vida del componente funcional.
                </p>
            <Link className="btn btn-primary" to="use-effect">
                Más detalles
            </Link>
  </div>
</div>

    )
}