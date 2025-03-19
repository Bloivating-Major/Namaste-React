
# 🌟 Episode 11: Data is the New Oil 💧

Welcome to Episode 11 of my React journey! In this episode, we explored the separation of a React application into UI and data layers, controlled and uncontrolled components, prop drilling, and the Context API. Let’s dive into the key concepts and learnings! 🚀

## 📚 Key Learnings

### Part 1: Higher Order Components (HOCs) 🎩

- **Higher Order Components** are functions that take a component and return a new component. They are used to enhance the functionality of existing components without modifying their structure.

#### Example of a Higher Order Component
```javascript
// Exporting our HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="restaurant-card h-fit relative z-10">
        <div className='font-medium text-white bg-black absolute left-3 top-2 px-2 z-50 rounded-md'>Promoted</div>
        <img
          className="cardImage"
          src={props.resData.image}
          alt="LogoImage"
        />
        <h2 className='font-bold text-xl mt-2'>{props.resData.name}</h2>
        <h3 className='font-medium text-red-500'>Rating: {props.resData.rating}</h3>
        <p className='capitalize font-medium'>{props.resData.cuisines}</p>
        <h4 className='font-medium'>Prices: {props.resData.price}</h4>
      </div>
    );
  }
}
```

### Part 2: Creating a Restaurant Category Feature 🍽️

- We extracted data from restaurant categories and created a `RestaurantCategory` component. This component is mapped for each category filtered from the data.

#### Accordion Feature
- We implemented an accordion feature for the `RestaurantCategory` component. When clicked, it reveals the list of items associated with that category.

#### Example of Accordion Component
```javascript
const RestaurantCategory = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category">
      <h2 onClick={toggleAccordion} className="cursor-pointer">
        {category}
      </h2>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

### Part 3: Managing Accordion State 🔄

- We built the feature where clicking on one accordion collapses any other open accordions. This required lifting the state up to a common parent component, allowing us to manage the open/closed state of all accordions.

#### Example of Lifting State
```javascript
const AccordionContainer = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.id}
          category={category.name}
          items={category.items}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};
```

### Part 4: Prop Drilling and Context API 🌐

- **Prop Drilling** occurs when you pass data through many layers of components, which can make the code harder to manage. To avoid this, we can use the **Context API**.

#### Creating a Context
- We created a context using the `createContext` function, allowing us to share data across components without prop drilling.

#### Example of Creating Context
```javascript
import React, { createContext, useContext } from 'react';

// Create a Context
const MyContext = createContext();

// Provider Component
const MyProvider = ({ children }) => {
  const value = { /* shared data */ };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Using Context in a Functional Component
const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue.someData}</div>;
};

// Using Context in a Class Component
class MyClassComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {contextValue => <div>{contextValue.someData}</div>}
      </MyContext.Consumer>
    );
  }
}
```

## 🎉 Conclusion

In this episode, we learned about the separation of UI and data layers, higher-order components, creating a restaurant category feature with an accordion, managing state effectively, and utilizing the Context API to avoid prop drilling. These concepts are essential for building scalable and maintainable React applications. Stay tuned for the next episode! 🎈
