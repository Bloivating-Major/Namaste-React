# 📚 Episode 05: Let's Get Hooked! 🎣

## 🚀 Understanding ES6 Exports & Imports

### 🔹 Named Export
✅ Multiple exports per file.
✅ Must use `{}` while importing.
✅ Name should match the exported name.

```js
// Exporting
export const MyComponent = () => {};
export const MyComponent2 = () => {};

// Importing
import { MyComponent, MyComponent2 } from "./MyComponent";
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

### 🔹 Default Export
✅ Only one default export per file.
✅ No `{}` required while importing.
✅ Can be imported with any name.

```js
// Exporting
default MyComponent = () => {};
export default MyComponent;

// Importing
import MyComponent from "./MyComponent";
```

### 🔹 * as Export
✅ Imports everything from the module.
✅ Access components using dot notation.

```js
// Exporting
export const MyComponent = () => {};
export const MyComponent2 = () => {};
export const MyComponent3 = () => {};

// Importing
import * as MainComponents from "./MyComponent";

// Using
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

### 🔹 Named & Default Export Together
```js
export const MyComponent2 = () => {};
const MyComponent = () => {};
export default MyComponent;

// Importing
import MyComponent, { MyComponent2 } from "./MyComponent";
```

---

## 🎣 What are React Hooks?
📌 Introduced in React 16.8 🚀
📌 Reusable JavaScript functions for managing state & side effects
📌 No need to change component hierarchy
📌 Enhances component reusability

### 🛠 Common Built-in Hooks

- 🔹 `useState` → Manages state 🏗️
- 🔹 `useEffect` → Handles side effects 🌊
- 🔹 `useContext` → Provides access to context 📦
- 🔹 `useReducer` → Alternative for complex state management 🤹
- 🔹 `useCallback` → Memoizes functions ⚡
- 🔹 `useMemo` → Memoizes values 🏎️
- 🔹 `useRef` → Creates a mutable reference 🎯
- 🔹 `useLayoutEffect` → Fires after all DOM mutations 🏗️
- 🔹 `useDebugValue` → Adds debug info 🐞

---

## 🔥 Why Do We Need `useState`?
✅ Maintains state in functional components 🔄
✅ Tracks state changes dynamically 🧐
✅ Returns an array with state and an updater function ⚙️

### 📝 Syntax
```js
const [state, setState] = useState(initialState);
```

### 🛠 Importing
```js
import React, { useState } from "react";
```

### 💡 Example
```js
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

🚀 Happy Coding! 🎉

