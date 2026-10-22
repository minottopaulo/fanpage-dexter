import { navLinks } from '../../data/navLinks'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.brand}>dexter.</span>

          <nav aria-label="Rodapé">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className={styles.copy}>
          Projeto de fã, sem vínculo com a série ou seus detentores de direitos.
          Desenvolvido por Paulo Minotto.
        </p>
      </div>
    </footer>
  )
}