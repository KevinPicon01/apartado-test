
import '../styles/members.css'
import {useAnimatedItems} from "@/app/components/animatedItems";

const Members = ({ webData }) => {
    useAnimatedItems();
    return (
        <div id='members' className="members-main-div">
            <div className="members-container">
                <h1 className="members-title honk-title animated-item">{webData.members[0].titulo}</h1>
                <p className="members-text">{webData.members[0].texto}</p>
                <a target="_blank" rel="noopener noreferrer"
                   className="members-image-container">
                    <img className="members-main-image animated-item" src={webData.members[0].imagen} alt="membersImage"/>
                </a>
            </div>
        </div>
    )
}
export default Members;