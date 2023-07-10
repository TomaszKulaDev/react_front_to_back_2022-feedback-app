import FeedbackItem from "./FeedbackItem";

import feedbackContext from "../context/FeedbackContext";
import {useContext} from "react";

// 6. Import

const FeedbackList = () => {
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
                    />
            ))}
        </div>
    );
}

export default FeedbackList;
