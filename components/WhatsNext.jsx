import styles from '../styles/landings/asesores.module.scss'

export default function WhatsNext() {
    return (
        <div id={styles["que-sigue"]}>
            <img
                className={styles["bg"]}
                src="https://blog.provident.com.mx/wp-content/uploads/2021/12/coins.png"
                alt='Coins'
            />
            <h2>¿Y ahora qué sigue?</h2>
            <ul>
                <li>
                    <strong>Primer plática</strong> – Se te explicará a detalle las actividades
                    como&nbsp;Asesor ¡No&nbsp;te&nbsp;quedes&nbsp;con&nbsp;dudas!
                </li>
                <li><strong>Documentos</strong> – INE, RFC, CURP y comprobante de&nbsp;domicilio</li>
                <li>
                    <strong>Visita a domicilio</strong> – Tendremos una plática contigo y tus&nbsp;familiares
                    para que conozcan tus&nbsp;actividades como Asesor Comisionista Independiente
                </li>
                <li>
                    <strong>Días en campo</strong> – Detalle de las actividades&nbsp;a&nbsp;realizar
                    como&nbsp;Asesor
                </li>
                <li>
                    <strong>Plática de seguimiento</strong> – Queremos resolver tus dudas y conocer tu
                    opinión de las actividades
                </li>
                <li><strong>Firma</strong> – Firmar documentos&nbsp;necesarios</li>
            </ul>
            <h3>
                Si estás interesado en formar parte del equipo de comisionistas haz clic
                aquí
            </h3>
            <a
                className={`${styles["cta"]} ${styles["cta-dark"]}`}
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=fwjlo7vpsEWivNALpDA5Y0ZB66nDOM5Nt6AnKUBWyeFUQlVYMk0yV1hSQzdEREVLT0NEVzBTNzQ3WS4u"
            >
                Tu camino empieza aquí
            </a>
        </div>
    )
}
