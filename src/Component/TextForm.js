import React, { useState } from 'react'

export default function TextForm(props) {

    const getDataUC = () => {
        // console.log('Uppercase button clicked');
        let newTextUC = text.toUpperCase();
        setText(newTextUC);
        if (text === '') {
            props.showAlert("Empty Text Box ", "warning")
        } else {
            props.showAlert("Converted To Uppercase!", "success")
        }
    }

    const getDataLC = () => {
        let newTextLC = text.toLowerCase();
        setText(newTextLC);
        if (text === '') {
            props.showAlert("Empty Text Box ", "warning")
        } else {
            props.showAlert("Converted To Lowercase!", "success")
        }
    }

    const clearData = () => {
        let newTextClear = ''
        setText(newTextClear);
        if (text === '') {
            props.showAlert("Empty Text Box ", "warning")
        } else {
            props.showAlert("Cleared All The Text", "success")
        }
    }

    const copyData = () => {

            navigator.clipboard.writeText(text);
            props.showAlert("All the text has been copied !", "success")
        }
    

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if (text === '') {
            props.showAlert("Empty Text Box ", "warning")
        } else {
            props.showAlert("All the extra spaces has been deleted", "success")
        }
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    //here enter text here is the value of text and we can update it using setText method
    // text = "new text"  //wrong way to change the value
    // setText = ('new text')  //wrong way to change the value

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#373737' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={getDataUC}>Change To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={getDataLC}>Change To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={clearData}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={copyData}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Del Extra Space</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Includes ;</h2>
                <h6>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.replace(/\s+/g, '').length} characters</h6>

            </div>

        </>
    )
}

