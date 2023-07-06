import React, {useState} from 'react';
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange =(e)=>{
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length +2 <= 10){
            setMessage('Text must be at least 10 characters.')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
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

                    <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
                    {/*Btn colors. primary, secondary*/}
                </div>
                {message && <div className={'message'}>{message}</div>}
            </form>
        </Card>
    );

}

export default FeedbackForm;
