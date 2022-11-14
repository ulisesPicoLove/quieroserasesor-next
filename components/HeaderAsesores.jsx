import styles from '../styles/landings/asesores.module.scss'

export default function HeaderAsesores() {
    return (
        <div id={styles["intro"]}>
            <div className={styles["shine-bg"]} />
            <header>
                <div className={styles["bg"]}>
                    <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/e-01.png" alt='star'/>
                    <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/e-02.png" alt='star'/>
                    <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/e-03.png" alt='star'/>
                    <img
                        className={styles["cloud-01"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/nube-01.png"
                        alt='cloud'
                    />
                    <img
                        className={styles["cloud-02"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/nube-01.png"
                        alt='cloud'
                    />
                </div>
                <div className={styles["brand"]}>
                    <img
                        alt="Provident. Únete como Agente Comisionista Independiente"
                        className={styles["cloud"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/nube-01.png"                        
                    />
                    <img
                        alt="Provident. Únete como Agente Comisionista Independiente"
                        className={styles["logo"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-asesor-expirience.png"                        
                    />
                </div>

                <div className={styles['sub-title']}>
                    <h2>
                        <span>Construimos un mundo mejor <br /></span> a&nbsp;través de la inclusión financiera
                    </h2>
                </div>

                <img
                    alt="Es tu momento de brillar"
                    className={styles["text"]}
                    src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-es-tu-momento-de-brillar.png"
                />
                <h1>
                    ¡Únete como Agente <br />
                    Comisionista Independiente!
                </h1>
            </header>
            <div className={styles["row-a"]}>
                <div className={styles["col"]}>
                    <div className={styles["intro"]}>
                        <big>¡Hola!</big>
                        <br />
                        <p>
                            Estás por comenzar un nuevo camino como Asesor Comisionista
                            Independiente.
                        </p>
                        <p>
                            Somos la empresa líder en el mercado de Préstamos Personales a
                            domicilio en México.
                        </p>
                        <p>
                            <strong>
                                10,000 Agentes
                                <br />
                                26 Estados
                            </strong>
                        </p>
                        <p>
                            <strong>
                                ¡Estamos orgullosos de hacer la diferencia en la vida de las
                                personas!
                            </strong>
                        </p>
                        <p>Ofreciendo soluciones financieras, simples y personalizadas.</p>
                    </div>
                    <a
                        className={styles["cta"]}
                        href="https://forms.office.com/Pages/ShareFormPage.aspx?id=fwjlo7vpsEWivNALpDA5Y0ZB66nDOM5Nt6AnKUBWyeFUQlVYMk0yV1hSQzdEREVLT0NEVzBTNzQ3WS4u&sharetoken=00bjotM6ORmXFlyX9niF"
                    >
                        ¿Quieres ser Asesor?
                    </a>
                </div>
                <div className={styles["col"]}>
                    <img
                        className={styles["a"]}
                        alt="Provident. Únete como Agente Comisionista Independiente"
                        src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-unete-como-agente-2.png"
                    />
                </div>
            </div>
        </div>
    )
}
