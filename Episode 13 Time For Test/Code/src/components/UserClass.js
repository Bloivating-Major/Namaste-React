import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      defaultCount: 5,
      userData: null,
    };
  }

  componentDidMount() {
    const githubUsername = "Bloivating-Major";

    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((err) => console.error("GitHub fetch error:", err));
  }

  render() {
    const { name, location } = this.props;
    const { count, defaultCount, userData } = this.state;

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
        <div className="mt-4 text-sm text-gray-300 text-center">
          <p>Count Class ➡️ {count}</p>
          <p>Default Count ➡️ {defaultCount}</p>
          <button
            onClick={() =>
              this.setState({
                count: count + 1,
              })
            }
            className="px-3 py-2 bg-blue-500 mt-3 rounded-md hover:bg-blue-600 transition"
          >
            Update Count
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
