import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

const About = () => {
  return (
    <div className='p-5'>
        <h1>About</h1>
        <div>
          {/* This is how we access context values in class based component */}
          <UserContext.Consumer>
              {
                ({loggedInUser})=> ( <h1 className='font-bold'>{loggedInUser}</h1> )
              }
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Series</h2>
        <div className='flex mt-10'>
        <User name='Sambhav Functional Component' location="Canada Function" />
        <UserClass name='Sambhav Class Component' location="San Francisco Class" />
        </div>
    </div>
  )
}

export default About
