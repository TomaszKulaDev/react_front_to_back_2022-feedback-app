import {nanoid} from "nanoid";
import {useState} from "react";
import Header from "./components/Header";
import './App.css';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
        <>
            <Header/>
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    );
}

export default App;
