import '../styles/homeContent.css'
import { useAnimatedItems } from "@/app/hooks/useAnimatedItems";

const HomeContent = ({ webData }) => {
    const registerItem = useAnimatedItems();
    return (
        <div id='Home' className="home-main-div">
            <div className="main-container">
                <h1 ref={registerItem} className="main-title animated-item">{webData.home?.titulo}</h1>
                <a target="_blank" rel="noopener noreferrer"
                   className="main-image-container">
                    <img ref={registerItem} className="home-main-image animated-item" src={webData.home?.imagen} alt="mainImage"/>
                </a>
                <div className="main-text">
                    <nav className="navHome">
                        <a href="#About">Conocenos</a>
                        <a href="#Catalogue" className="homeBorder">Productos</a>
                        <a href="#ContactUs" className="homeBorder">Contáctanos</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default HomeContent;