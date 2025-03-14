import React, { useState } from "react";

const User = ({name, location}) => {

  const [count, setCount] = useState(0);
  const [defaultCount, setDefaultCount] = useState(5);

  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="GitHub Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-600"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-400">@octocat</p>
          <p className="text-sm text-gray-300">{location}</p>
          <p>Count ➡️ {count}</p>
          <p>Default Count ➡️ {defaultCount}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
