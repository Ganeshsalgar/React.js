import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const data = useLoaderData();
  const [data, setData] = useState([])
  useEffect(() => {
   fetch('https://api.github.com/users/hiteshchoudhary')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      setData(data)
   })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex justify-center">
        <img
          src={data.avatar_url}
          alt="Git picture"
          width={300}
          className="rounded-full"
        />
      </div>

      <div className="pt-14">
        <h1>Github followers: {data.followers}</h1>
        <div>Location :- {data.location}</div>
        <div>name :- {data.name}</div>
        <div>public_repos :- {data.public_repos}</div>
        <div>twitter_username :- {data.twitter_username}</div>
      </div>
    </div>
  );
}

export default Github;


//Another Way to Call API this is Optimized way to haddle API 

//it is work the when we hover:  the header it will quickly getting a data from the API
// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
