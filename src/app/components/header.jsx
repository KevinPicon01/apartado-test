import '../styles/header.css';

const TheHeader = ({ webData }) => {
    return (
        <>
            <header className="header">
                <div
                    className="menu-icon"
                    onClick={() => {
                        const navbar = document.getElementById('navbar');
                        if (navbar.style.display === 'flex') {
                            navbar.style.display = 'none';
                        } else {
                            navbar.style.display = 'flex';
                        }
                    }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <nav className="navbar" id="navbar">
                    <ul>
                        <li>
                            <a
                                href="#Home"
                                onClick={() => {
                                    document.getElementById('navbar').style.display = 'none';
                                }}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Catalogue"
                                onClick={() => {
                                    document.getElementById('navbar').style.display = 'none';
                                }}
                            >
                                Catalogo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#About"
                                onClick={() => {
                                    document.getElementById('navbar').style.display = 'none';
                                }}
                            >
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#ContactUs"
                                onClick={() => {
                                    document.getElementById('navbar').style.display = 'none';
                                }}
                            >
                                Contáctanos
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="navigation">
                    <a href="#Home" >Inicio</a>
                    <a href="#About" className="borderLin">Nosotros</a>
                </nav>
                <div className="logo">
                    <img src={webData.header?.logo} alt="Logo"/>

                </div>
                <nav className="navigation">
                    <a href="#Catalogue">Catalogo</a>
                    <a href="#ContactUs" className="borderLin" >Cotizar</a>
                </nav>
            </header>
        </>
    );
}
export default TheHeader;
