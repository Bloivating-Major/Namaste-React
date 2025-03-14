import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div className='p-5'>
        <h1>About</h1>
        <h2>This is Namaste React Series</h2>
        <div className='flex mt-10'>
        <User name='Sambhav Functional Component' location="Canada Function" />
        <UserClass name='Sambhav Class Component' location="San Francisco Class" />
        </div>
    </div>
  )
}

export default About
