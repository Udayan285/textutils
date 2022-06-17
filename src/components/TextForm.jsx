
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleUpClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }
    const handleLowClick =()=>{
        let lowText= text.toLocaleLowerCase();
        setText(lowText);
        props.showAlert('Converted to lowercase!', 'success')
    }
    const handleClearClick =()=>{
        let clear= '';
        setText(clear);
        props.showAlert('Clear text!', 'success')
    }
    const handleCopy =()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!', 'success')
    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed all extra spaces!', 'success')
    }

  return (
    <>
    <div className="mb-3">
        <h1 className='text-center'>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#0f1066',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-success my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-warning my-2 mx-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} type="button" className="btn btn-success my-2 mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
        
    </div>
    <div className="container">
        <h2>Your text summary here</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{ 0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h3>Preview it here</h3>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
