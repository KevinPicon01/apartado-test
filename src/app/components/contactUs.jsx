import '../styles/homeContent.css'
import '../styles/contactUs.css'
import { useAnimatedItems } from "@/app/hooks/useAnimatedItems";

const ContactUs = ({ webData }) => {
    const registerItem = useAnimatedItems();
    return (
        <div id='ContactUs' className="contact-main-div">
            <div className="contact-container">
                <div ref={registerItem} className="contact-text-container animated-item">
                    <h1 className="contact-title honk-title ">Contáctanos</h1>
                    <br></br>
                    <p className='about-text'>{webData.contact_us.texto}</p>
                    <a href={webData.link3} target="_blank" rel="noopener noreferrer">
                        <button className="whatsapp-button">Contáctanos</button>
                    </a>
                </div>
                <div ref={registerItem} className='contact-image-container animated-item'>
                    <img className='contact-image' src={webData.contact_us.imagen} alt='contact'/>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;