import React from 'react';
import '../styles/dataTr.css';
import textos from "@/app/texts/texts";

const PoliticaTratamientoDatos = () => {
    return (
        <div className="politica-container">
            <h1 className="politica-titulo">Política de Tratamiento de Datos</h1>
            <section className="politica-seccion">
                <h2 className="politica-subtitulo">1. Introducción</h2>
                <p>
                    Esta política de tratamiento de datos describe cómo recopilamos, utilizamos,
                    protegemos y compartimos su información personal. Al utilizar nuestros servicios,
                    usted acepta los términos y condiciones de esta política.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">2. Datos Recopilados</h2>
                <p>
                    Recopilamos información personal que usted nos proporciona directamente, como
                    su nombre, dirección de correo electrónico, número de teléfono y cualquier otro
                    dato relevante para la prestación de nuestros servicios.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">3. Uso de los Datos</h2>
                <p>
                    Utilizamos sus datos personales para mejorar nuestros servicios, personalizar su
                    experiencia, comunicarnos con usted, y cumplir con nuestras obligaciones legales
                    y contractuales.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">4. Protección de Datos</h2>
                <p>
                    Implementamos medidas de seguridad adecuadas para proteger sus datos personales
                    contra el acceso no autorizado, alteración, divulgación o destrucción.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">5. Derechos del Usuario</h2>
                <p>
                    Usted tiene el derecho de acceder, corregir, eliminar y limitar el uso de sus
                    datos personales. Para ejercer estos derechos, por favor contáctenos a través
                    de la información proporcionada en esta política.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">6. Cambios a esta Política</h2>
                <p>
                    Nos reservamos el derecho de actualizar esta política de tratamiento de datos en
                    cualquier momento. Le notificaremos de cualquier cambio importante y le
                    proporcionaremos la oportunidad de revisar la política actualizada.
                </p>
            </section>

            <section className="politica-seccion">
                <h2 className="politica-subtitulo">7. Contacto</h2>
                <p>
                    Si tiene alguna pregunta o preocupación sobre nuestra política de tratamiento de
                    datos, no dude en ponerse en contacto con nosotros a través del correo
                    electrónico: {textos.contact.email}.
                </p>
            </section>
        </div>
    );
};

export default PoliticaTratamientoDatos;
