# Implementation

This document provides a roadmap to transform the scaffolding that was generated into a
usable chrome extension that look something like the wireframe we designed.

## Reform

First we need to reform the current scaffolding code, to shape it into a structure that resembles the [opinionated](/#Opinionated) structure that was previously discussed.
Lets kick off the dev server and get started

> marc:~/cmc/gridlinks$ yarn dev

point your browser at http://localhost:3000

### 1. update index.html
As with all web apps, the scaffolding starts with index.html to get things started.
we can update the favicon, title with values related to out extension.

### 2. remove unused scaffolding artifacts
* public/vite.svg
* src/assets/react.svg

Once you do this you will see errors in the browser. Its ok and we will fix that in a minute.

### 3. rewrite App.jsx
* load App.jsx into you editor and replace the content with this:

```javascript
export default function App() {
   return (
      <>
      </>
   )
}
```
the errors shoud clear and you should see a blank screen in the browser.

### 4. add required packages

We will be using material ui to implement our design and the react router for implement navigation
so we can add the required libraries now and save a little time figuring it out later.

* yarn add @emotion/react @emotion/styled
* yarn add @mui/icons-material @mui/material @mui/system
* yarn add react-router-dom

### 5. rewrite main.jsx and App.jsx again

For main.jsx we wrap the app in a react router code so we can use the react router.

main.jsx
```code
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)

```

For App.jsx there are lots of changes including:

* adding react state and effect

  In React, "state" is a built-in object that allows a component to create and manage its own data. This data can be anything that the component needs: numbers, strings, arrays, objects, etc. State is mutable and can be changed using the setState function (in class components) or the useState hook (in functional components).

  "Effect" is a term used in the context of the useEffect Hook in React. The useEffect Hook lets you perform side effects in function components. A side effect could be data fetching, subscriptions, or manually changing the DOM from React components.

* adding the theming components so we can easily use dark mode.

* and providing the original layout and routing markup.


App.jsx
```code
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import "./App.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { Settings } from "./pages/Settings"
import { P1, P2, P3, ...} from "./pages/Settings"
import packageJson from "../package.json"

const { name, version } = packageJson

export default function App() {
   const ls = JSON.parse(localStorage.getItem(name) ?? `{"version": "${version}" ,"dm":false}` )
   const [darkMode, setDarkMode] = useState(ls.dm ?? false)

   useEffect(() => {
      if (darkMode) {
         document.body.classList.add("dark-mode")
      } else {
         document.body.classList.remove("dark-mode")
      }
   }, [darkMode])

   const themeProps = { version, darkMode, setDarkMode }
   const theme = createTheme({
      palette: { mode: darkMode ? "dark" : "light" },
   })

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Header themeProps={themeProps} />
         <Routes>
            <Route path="/" element={<Home themeProps={themeProps} />} />
            <Route path="/search" element={<Search themeProps={themeProps} />} />
            <Route path="/settings" element={<Settings themeProps={themeProps} />} />
            <Route path="/p1" element={<P1 themeProps={themeProps} />} />
            <Route path="/p2" element={<P2 themeProps={themeProps} />} />
            <Route path="/p3" element={<P3 themeProps={themeProps} />} />
            <Route path="/p4" element={<P4 themeProps={themeProps} />} />
            <Route path="/p5" element={<P5 themeProps={themeProps} />} />
            <Route path="/p6" element={<P6 themeProps={themeProps} />} />
            <Route path="/p7" element={<P7 themeProps={themeProps} />} />
            <Route path="/p8" element={<P8 themeProps={themeProps} />} />
            {/* This is a catch-all route */}
            <Route path="*" element={<Home themeProps={themeProps} />} />
         </Routes>
      </ThemeProvider>
   )
}

```

### 6. Complete the layout and directory creation and update the Home page.

Here we add the data and components directories. The data directory is where we define the links and mappings to the grid. Also we will setup the home page
to render hello world.

<img src="img/gridlinks-step3.png" width="70%" vspace="20">


and when we ready to start working on the header.


## Components

React components are the building blocks of any React application. They are JavaScript functions or classes that optionally accept inputs, called "props", and return a React element that describes how a section of the UI should appear.

---

[Back «](design) __Implement__  [» Next](test)