import React, {useState} from 'react';
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
    const [text, setText] = useState('');

    const handleTextChange =(e)=>{
    setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate this servise?</h2>
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a opinion"/>

                    <Button type='submit' version='primary'>Send</Button>
                    {/*Btn colors. primary, secondary*/}

                </div>
            </form>
        </Card>
    );

}

export default FeedbackForm;
