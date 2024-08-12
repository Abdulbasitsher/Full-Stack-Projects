import './App.css'
import UserContextProvider from './context/UserContextAPI'
import Profile from './Components/Profile';
import Login from './Components/Login';
function App() {

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
