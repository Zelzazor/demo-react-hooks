import { Link } from "react-router-dom"

export const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">React hooks</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="use-state">useState</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="use-effect">useEffect</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="use-reducer">useReducer</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}