import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState();
  
  return (
    <div className="App position-center" style={{backgroundColor: color , alignItems: "center", width: "100%",height:"800px"}}>
      <div className= " rounded-2" style={{backgroundColor: color, width: "70%", position: 'fixed', bottom: '50px', display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => setColor("red")} 
          type="button" className="btn btn-primary m-0.1" style={{ width: '10%' }}>Primary</button>
        <button onClick={() => setColor("gray")} 
          type="button" className="btn btn-secondary m-0.1" style={{ width: '10%' }}>Secondary</button>
        <button onClick={() => setColor("green")} 
          type="button" className="btn btn-success m-0.1" style={{ width: '10%' }}>Success</button>
        <button onClick={() => setColor("red")} 
          type="button" className="btn btn-danger m-0.1" style={{ width: '10%' }}>Danger</button>
        <button onClick={() => setColor("yellow")} 
          type="button" className="btn btn-warning m-0.1" style={{ width: '10%' }}>Warning</button>
        <button onClick={() => setColor("cyan")} 
          type="button" className="btn btn-info m-0.1" style={{ width: '10%' }}>Info</button>
        <button onClick={() => setColor("white")} 
          type="button" className="btn btn-light m-0.1" style={{ width: '10%' }}>Light</button>
        <button onClick={() => setColor("black")} 
          type="button" className="btn btn-dark m-0.1" style={{ width: '10%' }}>Dark</button>
      </div>
      
    </div>
  );
}

export default App;
