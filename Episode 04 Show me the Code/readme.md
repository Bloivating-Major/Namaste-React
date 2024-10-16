
# Episode 4

### Part 1: Planning and Structuring the Application

1. **Before building an app, the first step is planning.**
   
   - We started by creating a wireframe of the application and broke it down into sections.

### Application Structure:

```bash
APP
 ├── Header
 │   ├── Logo
 │   └── Nav Items
 ├── Body
 │   ├── Search
 │   ├── Card Container
 │   │   └── Card Items
 └── Footer
     ├── Copyright
     ├── Links
     ├── Address
     └── Contact
```

### Component Creation:

- We created components based on the application's needs.
- Started with the **Header** component by working on:
  - Logo
  - Navigation items (list of headers)
  
- Next, we moved to the **Body** component:
  - Implemented the **Card Container**.
  
- Initially, the cards inside the body component were hardcoded. Later, we will add data dynamically.

---

### Part 2: Making Dynamic Cards with React Components

- **Props in React**: 
  - React has something called "Props" (short for "Properties"). It allows you to pass arguments to components, making them dynamic.

- **Config-Driven UI**:
  - Applications often change their UI dynamically based on data. For example, offers or discounts you see might change based on your location. This means our website is driven by data (Config-Driven UI).

- **Using Objects and Arrays**:
  - We used objects and arrays of objects to represent the data for our dynamic cards.

- **The Importance of Keys in `.map()`**:
  - When rendering lists in React (like restaurant cards), it's crucial to use a unique `key` for each item. This helps React optimize its render cycle and efficiently manage updates in the DOM.

---

This README covers the main structure and dynamic card creation in Episode 4 of our project. Each step brings us closer to building a scalable, maintainable React application.
