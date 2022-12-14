import styles from '../styles/landings/asesores.module.scss'

export default function AsesoresRoot({ children }) {
  return (
    <div id={styles["root"]}>
      <nav className='nav'>
        <div id="mobile-menu" className="mobile-menu">
          <span />
          <span />
          <span />
        </div>
        <ul id="nav-menu">
          <li>
            <a className={styles["menu-item"]} href={`/#${styles["intro"]}`}>
              Intro
            </a>
          </li>
          <li>
            <a className={styles["menu-item"]} href={`/#${styles["que-es"]}`}>
              ¿Qué es?
            </a>
          </li>
          <li>
            <a className={styles["menu-item"]} href={`/#${styles["expectativas"]}`}>
              ¿Qué buscamos?
            </a>
          </li>
          <li>
            <a className={styles["menu-item"]} href="/#actividades-a-realizar">
              Actividades a Realizar
            </a>
          </li>
          <li>
            <a className={styles["menu-item"]} href={`/#${styles["beneficios"]}`}>
              Beneficios
            </a>
          </li>
          <li>
            <a className={styles["menu-item"]} href={`/#${styles["que-sigue"]}`}>
              ¿Qué sigue?
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}