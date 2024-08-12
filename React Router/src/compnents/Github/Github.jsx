import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([])
    useEffect(
        ()=>{
            fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => setData(data))
        }
    )
    
    return(
        <div className="text-3xl text-white text-center bg-gray-800 m-5 p-2">
            Github follower: {data.followers}
            <img src={data.avatar_url} width={300} alt="git follower" />
        </div>
    )
}export default Github;