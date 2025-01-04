import React from "react";
import UserContext from "../Context/UserContext";

function Login(){
        const [username, setName] = React.useState('')
        const [password, setPassword] = React.useState('')
        const {user,setUser} = React.useContext(UserContext)
        
        const handleSubmit = (e)=>{
                e.preventDefault()
                setUser({username,password})
        }  
        if(user) return <h1>you are logged in as {user.username}</h1>
        return(
            <div>
                <h2>Login</h2>
                <input type="text" 
                value={username}
                onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                } 
                placeholder="username" />{"  "}
                <input type="text"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                placeholder="password" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
}

export default Login;