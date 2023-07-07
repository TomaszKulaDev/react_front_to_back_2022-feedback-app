import {createContext, useState} from "react";
// 1. Zwykłe importy

const FeedbackContext = createContext()
// 2. Tworzymy instancje o dowolnej nazwie.

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([{
            id: 1,
            text: 'This text is coming from Feedback Context.',
            rating: 10 }])


    // 3. Tworzysz funkcje z children w której jest useState np a w nim obiekt i za pomocą propsa value
    // przekazujesz obiekt znajdujący sie w feedback Huraa!:)

    return <FeedbackContext.Provider value={{feedback}}>{children}</FeedbackContext.Provider>

}
export default FeedbackContext;

// 4. Teraz lecisz wrapować componenty
