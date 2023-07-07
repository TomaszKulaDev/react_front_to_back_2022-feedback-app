import {useContext} from 'react';
import feedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
    const {feedback} = useContext(feedbackContext)
    //
    let averge = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    averge = averge.toFixed(1).replace(/[,.]0$/,'')

    return (
        <div className='feedback-stats'>
            <h4> {feedback.length} Reviews </h4>
            <h4>Average Rating: {isNaN(averge) ? 0 : averge}</h4>
        </div>
    );

}

export default FeedbackStats;
