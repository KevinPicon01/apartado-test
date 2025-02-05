import '../styles/footer.css'

const TheFooter = ({ webData }) => {
    return (
        <div className="footer">
            <div className="logo-footer">
                <img src={webData.footer.logo}/>
            </div>
            <div className="slogan-footer">
                <h3>{webData.footer.slogan}</h3>
            </div>
            <div className="navigation-footer">
                <a href='#Home'>Inicio</a>
                <a href="#ContactUs">Contactanos</a>
                <a href="#About">Nosotros</a>
            </div>
            <div className="social-media">
                <h3>{webData.footer.correo}</h3>
                <h3>{webData.footer.numero}</h3>
                <h3>Síguenos</h3>
                <div className="social-media-icon">
                    <a target="_blank" rel="noopener noreferrer"
                       href={webData.link1}>
                        <img className="media-logo-footer facebook-logo" src={webData.footer.logo1}/></a>
                    <a target="_blank" rel="noopener noreferrer"
                       href={webData.link2}>
                        <img className="media-logo-footer instagram-logo" src={webData.footer.logo2}/></a>
                    <a target="_blank" rel="noopener noreferrer" href={webData.link3}>
                        <img className="media-logo-footer whatsapp-logo" src={webData.footer.logo3}/></a>
                </div>
            </div>
        </div>
    )
}
export default TheFooter;