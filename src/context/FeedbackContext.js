import {nanoid} from "nanoid";
import {createContext, useState} from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 10
        },
        {
            id: 4,
            text: 'This is feedback item 4',
            rating: 10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Add feedback.
    const addFeedback = (newFeedback) => {
        newFeedback.id = nanoid()
        setFeedback([newFeedback, ...feedback])

    }
    // Delete feedback.
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newFeedback = feedback.filter((item) => item.id !== id)
            setFeedback(newFeedback)
        }
    }

    // Set item to be updated.
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            // function
            feedbackEdit
            // pice of state
        }}>{children}</FeedbackContext.Provider>

}
export default FeedbackContext;

