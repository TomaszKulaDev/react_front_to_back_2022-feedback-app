import FeedbackItem from "./FeedbackItem";

import feedbackContext from "../context/FeedbackContext";
import {useContext} from "react";

// 6. Import

const FeedbackList = ({handleDelete}) => {
    const {feedback} = useContext(feedbackContext)


    if (!feedback || feedback.length === 0) {
        return <p> No feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
            ))}
        </div>
    );
}

export default FeedbackList;
