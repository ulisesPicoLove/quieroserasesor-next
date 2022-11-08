import styles from '../styles/landings/asesores.module.scss'

export default function Goals() {
    return (
        <div id={styles["metas"]}>
            <div className={styles["col-left"]}>
                <h2>Otras actividades para lograr tus metas personales</h2>
                <ul>
                    <li>Completar cursos presenciales y en línea</li>
                    <li>Revisar tus ventas y cobranza</li>
                    <li>Participar en pláticas de orientación</li>
                    <li>Revisar la comunicación recibida en distintos medios</li>
                    <li>Mantener una comunicación cercana con el GCN</li>
                </ul>
            </div>
            <div className={styles["col-right"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2022/04/20220428-otras-actividades.png" alt='activities'/>
            </div>
        </div>
    )
}
