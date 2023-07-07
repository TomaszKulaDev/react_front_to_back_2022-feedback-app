import {nanoid} from "nanoid";
import {useState} from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {Route, Routes} from "react-router-dom";

import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = nanoid()
        setFeedback([newFeedback, ...feedback])

    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newFeedback = feedback.filter((item) => item.id !== id)
            setFeedback(newFeedback)
        }
    }

    return (
        <FeedbackProvider>
            {/*// 5 Wrapujemy to co nas interesuje. */}
            <Routes>
                <Route path='/' element={
                    <>
                        <Header text="Feedback IU"/>
                        <div className="container">
                            <AboutIconLink/>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </div>
                    </>
                }/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </FeedbackProvider>
    );
}

export default App;
