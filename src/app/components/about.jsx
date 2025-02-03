import '../styles/homeContent.css'
import '../styles/about.css'
import {useAnimatedItems} from "@/app/components/animatedItems";
import HomeContent from "@/app/components/homeContent";

const About = ({ webData }) => {
    useAnimatedItems();
    return (
        <div id='About' className="about-main-div">
                <div className="about-container">
                    <div className='about-image-container animated-item'>
                        <img className='about-image' src={webData.about_us[0].imagen} alt='about'/>
                    </div>
                    <div className="about-text-container animated-item">
                        <h1 className="about-title honk-title ">{webData.about_us[0].titulo}</h1>
                        <p className='about-text'> {webData.about_us[0].texto}</p>

                    </div>
                </div>
        </div>
    )
}
export default About;