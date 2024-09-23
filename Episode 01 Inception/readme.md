
# 📘 React Basics Project

This project is a walkthrough of how to use React, starting with a simple "Hello World" heading and moving on to more complex concepts like JSX and React DOM manipulation.

## 🚀 Steps

### 1. Basic HTML Setup
- In **VS Code**, you can use **Emmet** to quickly generate an HTML skeleton. Just type `!` and press Enter.
- We start by creating a basic HTML page with an `h1` tag that displays **"Hello World"**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Basics</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

### 2. Manipulating HTML with JavaScript
- Next, we dynamically create the heading using JavaScript:
  - First, create a `div` with the ID `root`.
  - Use JavaScript to append an `h1` tag to the `div`.

```html
<div id="root"></div>
<script>
    const rootElement = document.getElementById('root');
    const heading = document.createElement('h1');
    heading.innerText = 'Hello World from JavaScript!';
    rootElement.appendChild(heading);
</script>
```

### 3. Adding React to the Project
- Include React using **CDN** links to load the required scripts:
    - \`react.development.js\` (Core React framework)
    - \`react-dom.development.js\` (DOM manipulation with React)

```html
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

### 4. Using \`React.createElement()\`
- Create an \`h1\` element using React:

```js
const heading = React.createElement('h1', {}, 'Hello World from React!');
```

### 5. Rendering the Element with React DOM
- Use \`ReactDOM.createRoot()\` to render the React element into the \`root\` div:

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

### 6. Creating a Nested Tree Structure in React
- We can create nested elements in React by using \`React.createElement()\` recursively:

```js
const parent = React.createElement(
  'div', { id: 'parent' },
  React.createElement(
    'div', { id: 'child' },
    React.createElement('h1', {}, 'This is an H1 tag inside a child div')
  )
);
root.render(parent);
```

### 7. Adding Sibling Elements
- To add siblings to the structure, use arrays inside \`React.createElement()\`:

```js
const parent = React.createElement(
  'div', { id: 'parent' },
  [
    React.createElement('div', { id: 'child1' }, [
      React.createElement('h1', {}, 'First Title from React! 1'),
      React.createElement('h1', {}, 'Second Title from React! 1'),
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, 'First Title from React! 2'),
      React.createElement('h1', {}, 'Second Title from React! 2'),
    ])
  ]
);
root.render(parent);
```

### 8. Why Use JSX? 🤔
- Using \`React.createElement()\` can get messy, especially with nested elements.
- **JSX** simplifies the syntax, making your code more readable and intuitive.

### 9. How React Renders DOM 🎯
- React manipulates only the portion of the DOM where it is mounted, allowing partial updates rather than re-rendering the entire page.

---

### 🌟 Key Takeaways
- **React Elements** are just JavaScript objects.
- React uses the **Virtual DOM** to efficiently update the UI.
- **JSX** makes writing React components easier by letting you use HTML-like syntax within JavaScript.
