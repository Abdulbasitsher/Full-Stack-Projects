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
  
      const [color, setColor] = useState('bg-white');
  return (
    <div className={ `${color}`}>
      <div className='grid grid-cols-3 gap-1 ml-0 mb-1'>
    {  Object.entries(data).map(([id , userName]) => (
          <Card key={id} userName={userName} page={id}/>
       ) )}
      </div>
      <div className='flex w-full h-24 align-center justify-center'>
       <div className="bg-gray-500 w-52 h-16 rounded-xl ml-20" >
      <p className=' bg-green-400 text-white w-25 h-6 rounded-xl '>This is couter ${count}</p>
      <button onClick={increase} className='bg-gray-700 h-15 rounded-lg w-20'>Up </button>
      <button onClick={decrease} className='bg-gray-700 h-15 rounded-lg w-20'>down</button>
      </div>
      </div>
      {/* Color Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button onClick={ () => setColor('bg-white')} className="bg-white text-black px-4 py-2 rounded-lg shadow">
          White
        </button>
        <button onClick={() => setColor('bg-gray-900')} className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow">
          Gray
        </button>
        <button onClick={() => setColor('bg-green-700')} className="bg-green-700 text-white px-4 py-2 rounded-lg shadow">
          Green
        </button>
        <button onClick={() => setColor('bg-black')} className="bg-black text-white px-4 py-2 rounded-lg shadow">
          Black
        </button>
        <button onClick={() => setColor('bg-yellow-600')} className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow">
          Yellow
        </button>
        <button onClick={() => setColor('bg-blue-600')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          Blue
        </button>
        <button  onClick={() => setColor('bg-red-700')} className="bg-red-700 text-white px-4 py-2 rounded-lg shadow">
          Red
        </button>
      </div>
    </div>
  )
}
  
export default App
