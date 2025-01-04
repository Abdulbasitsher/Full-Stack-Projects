import { useCallback, useEffect, useRef, useState } from 'react';
import Profile from './Compnents/Profile';
import Login from './Compnents/Login'; 
import Card from './Compnents/Card'
import InputBox from './Compnents/InputBox';
import UseCurrencyConvertor from './hooks/useCurrencyConvertor';
import UserContextProvider from './Context/UserContextAPI';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = UseCurrencyConvertor(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const [count, setCount] = useState(15);
  const [color, setColor] = useState('bg-white');

  const [length, setLength] = useState(8);
  const [isAlphabates, setIsAlphabates] = useState(false);
  const [isCharacters, setIsCharacters] = useState(false);
  const [password, setPassweord] = useState('');

  let passArray = [1,2,3,4,5,6,7,8,9,0];
  let alphabates = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
  let characters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',':',';','"',"'",'<','>','?',',','.','/'];
  const generatePassword = useCallback( () => {  
    let password = '';
    

    if(isAlphabates){
      passArray = passArray.concat(alphabates);
    }
    if(isCharacters){
      passArray = passArray.concat(characters);
    }

    for(let i = 0; i < length; i++){
      let random = Math.floor(Math.random() * passArray.length);
      password += passArray[random];
    } 
    setPassweord(password);
  }, [length, isAlphabates, isCharacters, setPassweord]
) 

useEffect( () =>  generatePassword(),
 [length, isAlphabates, isCharacters, setPassweord, generatePassword]);

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
  };

  const passRef = useRef(null);

  const copyPassword = useCallback(() => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password)
  } , [password]);
  
  return (
    <div className={ ` w-full h-screen ${color}`}>
      {/* Cards */}
      <div className='grid grid-cols-3 gap-1 ml-0 mb-1'>
    {  Object.entries(data).map(([id , userName]) => (
          <Card key={id} userName={userName} page={id}/>
       ) )}
      </div>

      {/* Counter */}
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

      {/* Passwor Generator */}
      <div className='flex flex-col bg-zinc-400 shadow-sm p-4'> 
          <p className='bg-slate-500 text-white  w-40 h-10'>Password Generator</p>
          <div>
            <input ref={passRef} type="text"  value={password} className='w-52 h-8  p-1 rounded-t-lg rounded-bl-lg' />
            <button 
              onClick={copyPassword}  
              className='bg-blue-600 rounded-r-lg h-8 w-12 rounded-b-lg'>
              
              Copy
            </button>
          </div>
          <div>
              <input type="range" id='range' name='Range' value={length} min={8} max={20} onChange={ (e) => {
                setLength(e.target.value)
              }}/>
              <label htmlFor="range">Length: {length}</label>
              <input type="checkbox" id='alphabats'onChange={() => setIsAlphabates(prev => !prev) } name="Alphabets" />
              <label htmlFor="alphabets">Alphabates</label>
              <input type="checkbox" name="IsCharacters" text='Characters' onChange={() => setIsCharacters(prev => !prev)} />
              <label htmlFor="IsCharacters">Characters</label>
          </div>
      </div>

      {/* Currency Convertor */}
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* ContextAPI */}
      <UserContextProvider>
        <h1 className='mt-1'>This is for Context API</h1>
        <Profile />
        <Login />
      </UserContextProvider>

    );

    </div>
  )
}
  
export default App
