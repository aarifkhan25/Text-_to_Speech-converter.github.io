import {useState} from 'react'
import './App.css'
const TextToSpeech = () => {
    const [text, setText] = useState();
    var value=new SpeechSynthesisUtterance(text);
    
    const handleSpeakButton=()=>{
  window.speechSynthesis.speak(value)
    }
const handleStopButton=()=>{
    window.speechSynthesis.cancel();
}
    const handleClearButton=()=>{
     setText('')
     console.log(text);
     
    }
    
  return (
    <>
        <div className="container">
            <h2> Text to Speech Converter</h2>
            <br />
            <p> Write The given box and click the Start Speak button for the listen & Stop Speak button for Stop </p>

            < textarea type='text' onChange={(e)=>setText(e.target.value)} value={text} className='main-content' placeholder='Write Here....' />
               
            

            <div className="btn-style">
            
                <button onClick={handleSpeakButton} >Start Speak</button>
                <button onClick={handleClearButton}>Clear All</button>
                <button onClick={handleStopButton} >Stop Speak</button>
            </div>
        </div>
    </>
);
}

export default TextToSpeech
