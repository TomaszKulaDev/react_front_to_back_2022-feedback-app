import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {Route, Routes} from "react-router-dom";
import {FeedbackProvider} from "./context/FeedbackContext";


function App() {

    return (
        <FeedbackProvider>
            {/*// 5 Wrapujemy to co nas interesuje. */}
            <Routes>
                <Route path='/' element={
                    <>
                        <Header text="Feedback IU"/>
                        <div className="container">
                            <AboutIconLink/>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>
                        </div>
                    </>
                }/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </FeedbackProvider>
    );
}

export default App;
