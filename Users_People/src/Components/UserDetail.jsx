// src/Components/UserDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetail = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const user = users[id];

  return user ? (
    <div className="user-detail">
      <img src={`https://picsum.photos/400/600`} alt={user.first_name} />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Location: {user.location.street}, {user.location.city}, {user.location.state}</p>
      {/* Add other user details here */}
    </div>
  ) : (
    <p>User not found!</p>
  );
};

export default UserDetail;
