import React,{useContext} from "react";
import UserContext from '../Context/UserContext';

function Profile() {    
    const {user} = useContext(UserContext);
    if(!user){ return <h1>please login</h1>}
    return (
        <div className="relative w-64 h-80 rounded overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10045163/pexels-photo-10045163.jpeg" alt="Design" />
       
        <div className='absolute bottom-6 left-2 text-white'>
          <h1>department : CS</h1>
          <p>
            I am {user.username}
          </p>
          <span>1{user.password}</span>
          </div>
        </div>
    );
}

 export default Profile;
