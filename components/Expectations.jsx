import styles from '../styles/landings/asesores.module.scss'

export default function Expectations() {
    return (
        <div id={styles["expectativas"]}>
            <h2 className={styles["subtitles-light-green"]}>Expectativas claras sobre <br /> tus actividades como Asesor</h2>
            <div className={styles["row"]}>
                <div className={`${styles["col"]} ${styles["expectativas-img"]}`}>
                    <img
                        src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-que-buscamos.png"
                        alt="¿Qué buscamos en nuestras Agente Comisionista Independiente?"
                    />
                </div>
                <div className={`${styles["col"]} ${styles["info"]}`}>
                    <h2>
                        ¿Qué buscamos <br />
                        en nuestras Asesores?
                    </h2>
                    <ul>
                        <li>Vivir en el territorio que vas a cubrir</li>
                        <li>Conocer y tener disponibilidad de moverte en la zona asignada</li>
                        <li>Disponibilidad y flexibilidad de horarios (ideal no tener otras actividades comerciales, no indispensable)</li>
                        <li>Matemáticas básicas</li>
                        <li>Gusto por las ventas y cobranza</li>
                        <li>Celular inteligente propio</li>
                        <li>Conocimiento básico del uso de aplicaciones y redes sociales en teléfonos inteligentes</li>
                        <li>Habilidades de comunicación, negociación y trato con el cliente</li>
                        <li>Que seas persuasivo, organizado y dinámico.</li>
                    </ul>
                </div>
            </div>
            <div id='actividades-a-realizar' className={styles["star-row"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
            </div>
            <br />
            <h2 className={styles["cuales-actividades"]}>¿Cuáles son las actividades como Asesor?</h2>
            <div id={styles["actividades"]} className={styles["row"]}>
                <div className={`${styles["col"]} ${styles["right"]}`}>
                    <div className={styles["actividades"]}>
                        <h4><strong>AL VENDER</strong></h4>
                        <ul>
                            <li>
                                Atraer, construir y mantener&nbsp;tu cartera&nbsp;de&nbsp;clientes
                            </li>
                            <li>
                                Realizar cambaceo, volanteos, posteos&nbsp;físicos,
                                redes&nbsp;sociales, buscar&nbsp;recomendaciones
                            </li>
                            <li>
                                Visitar a tus clientes potenciales en&nbsp;su&nbsp;negocio
                            </li>
                            <li>Brindar seguimiento, excelente trato&nbsp;y&nbsp;servicio</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles["col"]} ${styles["left"]}`}>
                    <div className={styles["actividades"]}>
                        <h4><strong>AL COBRAR</strong></h4>
                        <ul>
                            <li>Acordar con tus clientes el día y hora de pago</li>
                            <li>Organizar una ruta&nbsp;de cobranza&nbsp;eficiente</li>
                            <li>
                                Visitar a todos&nbsp;tus&nbsp;clientes hasta lograr el
                                pago&nbsp;completo
                            </li>
                            <li>
                                Impulsar una relación a largo&nbsp;plazo
                                con&nbsp;tus&nbsp;clientes
                            </li>
                            <li>Mantener una cartera&nbsp;al&nbsp;corriente con todos tus clientes</li>
                            <li>Registrar en tu teléfono inteligente los&nbsp;pagos</li>
                            <li>
                                Realizar depósitos frecuentes en los&nbsp;bancos / establecimientos asignados, cuando se requiera
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles["star-row"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
            </div>
        </div>
    )
}
