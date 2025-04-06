import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="p-5 max-w-4xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-2">About</h1>

      {/* Accessing Context in Class-based Component */}
      <div className="mb-4">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <p className="text-xl font-semibold">
              Logged In User:{" "}
              <span className="text-blue-400">{loggedInUser}</span>
            </p>
          )}
        </UserContext.Consumer>
      </div>

      <h2 className="text-lg mb-6 text-gray-700">
        This is the{" "}
        <span className="text-green-400 font-medium">Namaste React</span> Series
        🚀
      </h2>

      <div className="flex flex-col md:flex-row mt-10 gap-6">
        <div className="w-full md:w-1/2">
          <User
            name="Sambhav Functional Component"
            location="Canada Function"
          />
        </div>
        <div className="w-full md:w-1/2">
          <UserClass
            name="Sambhav Class Component"
            location="San Francisco Class"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
