import { useState } from "react";
import { Link } from "react-router-dom";


export const UseState = ({noLink = false}) => {
    const [count, setCount] = useState(0);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="text-center">
                {count}
            </div>
            <div className="buttons d-flex justify-content-around">
                <button className="btn btn-primary w-25" onClick={() => setCount(count - 1)}>-</button>
                <button className="btn btn-primary w-25" onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="card-body">
                <h5 className="card-title">useState</h5>
                <p className="card-text">
                    Maneja estado en componentes funcionales.
                </p>
            {!noLink && <Link className="btn btn-primary" to="use-state">
                Más detalles
            </Link>}
  </div>
</div>

    )
}