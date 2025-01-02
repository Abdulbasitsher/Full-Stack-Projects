import React from 'react';

function Card({page = 1 , userName = "andul basit sher"}) {
  
  return (
    <div className="relative w-64 h-80 rounded overflow-hidden">
      <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10045163/pexels-photo-10045163.jpeg" alt="Design" />
   
    <div className='absolute bottom-6 left-2 text-white'>
      <h1>department : CS</h1>
      <p>
        I am {userName}
      </p>
      <span>{page}</span>
      </div>
    </div>
  );
}

export default Card;
