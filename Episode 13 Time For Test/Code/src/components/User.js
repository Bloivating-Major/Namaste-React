import React, { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [defaultCount, setDefaultCount] = useState(5);
  const [userData, setUserData] = useState(null);

  const githubUsername = "Bloivating-Major";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error("Failed to fetch GitHub user:", err);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <img
        src={userData?.avatar_url}
        alt="GitHub Avatar"
        className="w-24 h-24 rounded-full border-2 border-gray-600"
      />
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{userData?.name || name}</h2>
        <p className="text-gray-400 text-sm">@{userData?.login}</p>
        <p className="text-sm text-gray-300">{userData?.location || location}</p>
      </div>
      <div className="text-sm text-gray-400 text-center">
        <p>💻 Public Repos: {userData?.public_repos}</p>
        <p>👥 Followers: {userData?.followers}</p>
        <p>📦 Following: {userData?.following}</p>
      </div>
      <div className="mt-4 text-sm text-gray-300">
        <p>Count ➡️ {count}</p>
        <p>Default Count ➡️ {defaultCount}</p>
        <button onClick={()=> setCount(count +1)}
            className="px-3 py-2 bg-blue-500 mt-3 rounded-md hover:bg-blue-600 transition"
          >
            Update Count
          </button>
      </div>
    </div>
  );
};

export default User;
