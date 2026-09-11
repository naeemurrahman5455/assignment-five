## 🚀 Project Name:  DevStack Builder

DevStack Builder is a modern and interactive web application that helps developers explore different technologies and build their own personalized development stack. Users can browse technologies, view details, and add or remove technologies from their stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- JavaScript / ES6+
- Git & GitHub

## ✨ Features

## 1. 🔍 Explore Technologies

Browse and explore different development technologies through a clean and modern card-based interface.

## 2. 🧩 Build Your Own Stack

Add your favorite technologies to Your Stack and create a personalized development stack.

## 3. 🗑️ Manage Your Stack

Easily remove technologies from your selected stack and keep your development toolkit organized.


## 📂 Project Structure

components/
├── Navbar/
│   └── Navbar.tsx
│
├── Hero/
│   └── Hero.tsx
│
├── Technology/
│   ├── TechnologySection.tsx
│   ├── TechnologyGrid.tsx
│   └── TechnologyCard.tsx
│
├── Stack/
│   ├── StackSection.tsx
│   ├── StackHeader.tsx
│   ├── StackList.tsx
│   ├── StackCard.tsx
│   └── EmptyStack.tsx
│
└── Footer/
    └── Footer.tsx


## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.  
It makes React code easier to read and helps us create UI components.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.  
**State** is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and update state in a React component.  
I used it to manage the selected technologies and update the **Your Stack** section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders.  
I used it to load the technology data from the JSON file when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.  
A unique key helps React update the list correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.  
I used it in the **Your Stack** section to show the empty stack message when no technology is selected.

## 👨‍💻 Author

Naeemur Rahman
GitHub: @naeemurrahman5455