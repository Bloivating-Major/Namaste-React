
# 🌟 Episode 8: Class-Based Components in React 🌍

Welcome to Episode 8 of my React journey! In this episode, we explored class-based components, state management, lifecycle methods, and API calls. Let's dive into the key concepts and learnings! 🚀

## 📚 Key Learnings

### Part 1: Creating Class-Based Components 🏗️

- We started by creating a class-based component for our "About Us" page, which includes two user cards. Here's how we defined both functional and class-based components:

#### Functional Component
```javascript
import React from "react";

const User = ({ name, location }) => {
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
        </div>
      </div>
    </div>
  );
};

export default User;
```

#### Class-Based Component
```javascript
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
```

### Part 2: Creating State Variables in Class-Based Components 📊

- We learned how to create state variables in class-based components by initializing them in the constructor:
```javascript
constructor(props) {
  super(props);
  this.state = {
    count: 0,
    defaultCount: 5
  };
}
```

### Part 3: Updating State Variables in Class-Based Components 🔄

- To update state variables, we use the `setState` method:
```javascript
<button onClick={() => {
  this.setState({
    count: count + 1
  });
}} className="px-3 py-2 bg-blue-500 mt-3 rounded-md">Update Count</button>
```

### Part 4: Lifecycle Methods of React Components ⏳

- We explored the lifecycle methods of class-based components, which include:
  1. `constructor()`
  2. `render()`
  3. `componentDidMount()`
  
  The order of these methods is crucial for understanding how components are initialized and updated.

### Part 5: API Calls in Class-Based Components 🌐

- We learned that when multiple class-based components are rendered, all `render` methods are called first, followed by all `componentDidMount` methods. This sequence is important for managing API calls effectively.

### Part 6: Making API Calls in Class-Based Components 📞

- We discussed how to make API calls within class-based components, typically in the `componentDidMount` lifecycle method.

## ❓ FAQs

### Q: What is the order of lifecycle method calls in Class-Based Components?
A: The order of lifecycle methods in Class-Based Components is:
1. `constructor()`
2. `render()`
3. `componentDidMount()`
4. `componentDidUpdate()`
5. `componentWillUnmount()`

For more reference, check out the [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

### Q: Why do we use `componentDidMount`?
A: The `componentDidMount()` method is called after the component is rendered and placed in the DOM. It's the best place to make API calls or perform any setup that requires the component to be in the DOM.

### Q: Why do we use `componentWillUnmount`? Show with an example.
A: `componentWillUnmount()` is used for cleanup when switching routes in a Single Page Application (SPA). For example, if a timer is set in `componentDidMount()`, it should be cleared in `componentWillUnmount()` to prevent performance issues:
```javascript
componentDidMount() {
  this.timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.timer);
}
```

### Q: Why do we use `super(props)` in the constructor?
A: `super(props)` is used to call the constructor of the parent class (React.Component) and inherit its properties. If not used, you will encounter a Reference Error. Using `super(props)` allows access to `this.props` in the constructor.

### Q: Why can't we have the callback function of `useEffect` async?
A: `useEffect` expects its callback to return nothing or a cleanup function. If the callback is async, it returns a promise, which can interfere with the cleanup function being called.

## 🎉 Conclusion
In this episode, we delved into class-based components, state management, lifecycle methods, and making API calls. Understanding these concepts is essential for building robust React applications. Stay tuned for the next episode! 🎈

---
