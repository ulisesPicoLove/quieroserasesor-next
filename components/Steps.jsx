import styles from '../styles/landings/asesores.module.scss'

export default function Steps() {
    return (
        <div id={styles["que-es"]}>
            <div className={styles["star-bg"]}>
                <img
                    className={styles["star-01"]}
                    src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png"
                />
                <img
                    className={styles["star-02"]}
                    src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png"
                />
            </div>
            <h2 className={styles["subtitles-dark-green"]}>¿Qué es ser un Asesor?</h2>
            <h3>
                Un Asesor comisionista independiente presenta
                nuestros&nbsp;productos y&nbsp;servicios a nuestros&nbsp;clientes.
                Queremos que formes&nbsp;parte de este grupo&nbsp;de&nbsp; Asesores comisionistas independientes y
                hagas&nbsp;crecer tu negocio&nbsp;independiente
            </h3>
            <div className={styles["row"]}>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        1
                    </div>
                    <h4>La actividad</h4>
                    <span>Te diremos qué hacer y cómo generar&nbsp;comisiones</span>
                </div>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        2
                    </div>
                    <h4>El inicio</h4>
                    <span>Conocer tu propio negocio independiente</span>
                </div>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        3
                    </div>
                    <h4>Día a Día</h4>
                    <span>A través de tus actividades como asesor puedes crecer y obtener más comisiones</span>
                </div>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        4
                    </div>
                    <h4>El nivel</h4>
                    <span>
                        Puedes obtener mejor nivel a&nbsp;medida que crece tu&nbsp;negocio&nbsp;independiente
                    </span>
                </div>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        5
                    </div>
                    <h4>Reconocimiento</h4>
                    <span>Eres importante y valoramos tu&nbsp;esfuerzo como Asesor</span>
                </div>
                <div className={styles["item"]}>
                    <div className={styles["number"]}>
                        <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                        6
                    </div>
                    <h4>
                        Desarrollo <br />
                        personal
                    </h4>
                    <span>A través de tus actividades como Asesor podrás crecer, aprender y conocer lo mejor de ti</span>
                </div>
            </div>
        </div>
    )
}
