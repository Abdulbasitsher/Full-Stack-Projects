// src/Components/UserCard.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const UserCard = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {users.slice(0, 10).map((user, index) => (
        <div key={index} className="bg-white border rounded-lg shadow-md p-4">
          <img 
            src={`https://picsum.photos/200/300`} 
            alt={user.first_name} 
            className="w-full h-40 object-cover rounded-t-lg mb-2" 
          />
          <h2 className="text-lg font-semibold mb-1">{user.first_name} {user.last_name}</h2>
          <p className="text-sm text-gray-600 mb-2">{user.email}</p>
          <Link 
            to={`/user/${index}`} 
            className="text-blue-500 hover:underline"
          >
            See More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
