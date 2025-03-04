import '../styles/members.css'
import { useAnimatedItems } from "@/app/hooks/useAnimatedItems";

const Members = ({ webData }) => {
    const registerItem = useAnimatedItems();
    return (
        <div id='members' className="members-main-div">
            <div className="members-container">
                <h1 ref={registerItem} className="members-title honk-title animated-item">{webData.members.titulo}</h1>
                <p ref={registerItem} className="members-text animated-item">{webData.members.texto}</p>
                <a target="_blank" rel="noopener noreferrer"
                   className="members-image-container">
                    <img ref={registerItem} className="members-main-image animated-item" src={webData.members.imagen} alt="membersImage"/>
                </a>
            </div>
        </div>
    )
}
export default Members;