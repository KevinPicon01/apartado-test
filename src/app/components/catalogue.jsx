
import '../styles/catalogue.css'
import {useAnimatedItems} from "@/app/components/animatedItems";

const Catalogue = ({ webData }) => {
    useAnimatedItems();
    return (
        <div id='Catalogue' className="catalogue-main-div">
            <div className="catalogue-container">
                <h1 className="catalogue-title honk-title animated-item">{webData.catalogo.titulo}</h1>
                <a target="_blank" rel="noopener noreferrer"
                   className="catalogue-image-container">
                    <img className="catalogue-main-image animated-item" src={webData.catalogo.imagen} alt="catalogueImage"/>
                </a>
            </div>
        </div>
    )
}
export default Catalogue;