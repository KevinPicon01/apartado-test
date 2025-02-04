import '../styles/preHeader.css';



const PreHeader = ({ webData }) => {
    return (
        <>
            <header className="preHeader-main-container">
                <div className="social-media-icon">
                    <a target="_blank" rel="noopener noreferrer"
                       href={webData.link1}>
                        <img className="media-logo-footer facebook-logo" src={webData.footer?.logo1}/></a>
                    <a target="_blank" rel="noopener noreferrer"
                       href={webData.link2}>
                        <img className="media-logo-footer instagram-logo" src={webData.footer?.logo2}/></a>
                    <a target="_blank" rel="noopener noreferrer"
                       href={webData.link3}>
                        <img className="media-logo-footer whatsapp-logo" src={webData.footer ?.logo3}/></a>
                </div>
                <nav className="navigation">
                    <a href="/#ContactUs">Contactanos</a>
                </nav>
            </header>
        </>
    );
}
export default PreHeader;