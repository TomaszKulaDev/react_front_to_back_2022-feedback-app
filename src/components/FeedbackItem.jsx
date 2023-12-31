import {FaTimes, FaEdit} from "react-icons/fa";
import Card from "./shared/Card";
import feedbackContext from "../context/FeedbackContext";
import {useContext} from "react";


const FeedbackItem = ({item}) => {
    const {deleteFeedback, editFeedback} = useContext(feedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
                <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple'/>
                </button>

                <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple'/>
                </button>

            <div className="text-display">{item.text}</div>
        </Card>
    );
}
export default FeedbackItem;
