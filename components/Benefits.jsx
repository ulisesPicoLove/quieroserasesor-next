import styles from '../styles/landings/asesores.module.scss'

export default function Benefits() {
    return (
        <div id={styles["beneficios"]}>
            <div className={`${styles["col"]} ${styles["col-left"]}`}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-que-recibe-un-asesor.png" alt='man'/>
            </div>
            <div className={`${styles["col"]} ${styles["col-right"]}`}>
                <h2>
                    ¿Qué recibe <br />
                    un Asesor?
                </h2>
                <ul>
                    <li>Comisiones semanales atractivas</li>
                    <li>Apoyo de saldo semanal a tu celular</li>
                    <li>Promociones que te motivarán a alcanzar tus logros personales</li>
                    <li>Seguro COVID-19</li>
                    <li>
                        Puntos que pueden ser canjeados por increíbles premios en

                        <a href="https://www.soyestrella.com/" target="_blank" rel="noreferrer"> www.soyestrella.com</a>
                    </li>
                    <li>
                        Pláticas de orientación
                    </li>
                </ul>
            </div>
        </div>
    )
}
