
import { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState("black");

  const colorGreen = () => {
    setColor("grey");
  };

  const colorRed = () => {
    setColor("teal");
  };

  const colorOrange = () => {
    setColor("green");
  };


  return (
    <>
       
       <div style={{  height: "100vh",background:color,width:'100%'}} >
      <div className="container d-flex align-items-center justify-content-center">
        <div style={{marginTop:'250px',borderRadius:'10px'}}>
          <button onClick={colorGreen} style={{borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-success m-4">Button1</button>
          <button onClick={colorRed} style={{borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-danger m-4">Button2</button>
          <button onClick={colorOrange} style={{borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-warning m-4">Button3</button>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
