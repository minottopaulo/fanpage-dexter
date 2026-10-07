export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: 'rgb(13, 13, 13)', backdropFilter: 'blur(10px)' }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          dexter.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#personagens">personagens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#temporadas">temporadas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}