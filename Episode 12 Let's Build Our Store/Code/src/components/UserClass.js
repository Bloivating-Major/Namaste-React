import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          count : 0,
          defaultCount : 5
        }
    }
    render() {
      const {name , location} = this.props;
      const {count, defaultCount} = this.state;
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
              <p>Count Class ➡️ {count}</p>
              <button onClick={()=>{
                this.setState({
                  count : count + 1
                })
              }} className="px-3 py-2 bg-blue-500 mt-3 rounded-md">Update Count</button>
            </div>
          </div>
        </div>


      );
    }
  }
  

export default UserClass;
