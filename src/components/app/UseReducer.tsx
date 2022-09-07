import {  useReducer } from "react";
import { Link } from "react-router-dom";

interface IState {
    count: number;
    toggle: boolean;
}

interface IActions {
    type: string;
    value?: number;
}


const initialState: IState = {count: 0, toggle: false};

const reducer = (state: IState, action: IActions) => {
    switch(action.type) {
        case 'increment':
            return {...state, count: action.value ? state.count + action.value : state.count + 1};
        case 'decrement':
            return {...state, count: action.value ? state.count - action.value: state.count - 1};
        case 'toggle':
            return {...state, toggle: !state.toggle};
        default:
            return state;
    }
}


export const UseReducer = ({noLink = false}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="text-center">
                {state.count}{" "}{state.toggle?"ON":"OFF"}
            </div>
            <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary" onClick={()=>dispatch({type: "toggle"})}>Actualizar</button>
            </div>
            <div className="buttons d-flex justify-content-around">
                <button className="btn btn-primary w-25" onClick={() => dispatch({type: "decrement", value: 2})}>-</button>
                <button className="btn btn-primary w-25" onClick={() => dispatch({type: "increment", value: 3})}>+</button>
            </div>
            <div className="buttons d-flex justify-content-around">
                
            </div>
            <div className="card-body">
                <h5 className="card-title">useReducer</h5>
                <p className="card-text">
                    Maneja estados complejos en componentes funcionales.
                </p>
            {!noLink && <Link className="btn btn-primary" to="use-reducer">
                Más detalles
            </Link>}
  </div>
</div>

    )
}