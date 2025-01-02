import { useState } from 'react'
import './App.css'
import Card from './Compnents/Card'
function App() {
  const [count, setCount] = useState(15)
  function increase() {
    count !== 15 ? setCount(count+1) : setCount(15)
  };
  function decrease(){
    count !== 0 ? setCount(count - 1) : setCount(0);
  }
  let data = {
    1: "abdul",
    2: "basit",
    3: "sher",
    
    4: "abdul",
    5: "basit",
    6: "sher",
    7: "abdul",
    8: "basit",
    9: "sher"
  }
  return (
    < div className='bg-green-950'>
    <div className='grid grid-cols-3 gap-1 ml-0 mb-1'>
    {  Object.entries(data).map(([id , userName]) => (
          <Card key={id} userName={userName} page={id}/>
       ) )}
       </div>
       <div className=' flex w-full h-50 align-center justify-center'>
       <div className="w-40 h-50 ml-20" >
      <p className=' bg-green-400 text-white w-25 h-6 rounded-xl '>This is couter ${count}</p>
      <button onClick={increase} className='bg-gray-700 h-15 rounded-lg w-20'>Up </button>
      <button onClick={decrease} className='bg-gray-700 h-15 rounded-lg w-20'>down</button>
      </div></div>
      </div>
  )
}
  
export default App
