import FeedbackItem from "./FeedbackItem";

import feedbackContext from "../context/FeedbackContext";
import {useContext} from "react";

// 6. Import

const FeedbackList = () => {

    const {feedback, isLoading} = useContext(feedbackContext)

    // if is not loading and there is no feedback or length is 0 then we want to show No Feedback
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p> No feedback Yet</p>
    }

    return isLoading ? <h3>Loading...</h3> : (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default FeedbackList;
