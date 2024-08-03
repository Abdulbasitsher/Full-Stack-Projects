import {useEffect, useState, useCallback,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("") 
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str+= "0123456789"
    if (characterAllowed) str+="~!@#$%^&*()_-=+"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }   
    setPassword(pass)

   } ,[length,numberAllowed,characterAllowed,setPassword])
   const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)   
   }, [password])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center'>
            Passwaord Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" ref={passwordRef} placeholder='password' value={password} className='rounded-lg mx-2 outline-none w-full py-1 px-3' readOnly/>
            <button className="text-white bg-red-300 w-1/6 rounded-lg" 
            onClick={copyPasswordToClipBoard} >Copy</button>
        </div>
        <div className='flex text-center text-sm gap-x-2' >
          <div className='flex text-center'> 
            <input type="range" onChange={(e)=> {setLength(e.target.value)}} min={8} max={20} value={length} className='cursor-pointer'/>
            <label>Length: {length}</label>
          </div>
          <div className='flex text-center'> 
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}} className='cursor-pointer'/>
            <label>Numbers</label>
          </div>
          <div className='flex text-center'> 
            <input type="checkbox" defaultChecked={characterAllowed} id="numberInput" onChange={() => {setcharacterAllowed((prev) => !prev)}} />
            <label>Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
