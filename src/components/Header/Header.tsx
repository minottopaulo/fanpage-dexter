import { navLinks } from '../../data/navLinks'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${styles.header}`}>
      <div className="container">
        <a className={styles.brand} href="#">dexter.</a>

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
          <ul className={`navbar-nav mx-auto gap-lg-4 ${styles.menu}`}>
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className={`nav-link ${styles.link}`} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}