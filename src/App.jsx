/**
 * Imports the `useState` and `useEffect` hooks from the React library.
 * These hooks are commonly used for managing state and handling side effects in functional components.
 */
import { useState, useEffect } from "react"

/**
 * Imports the `BrowserRouter`, `Route`, and `Routes` components from the `react-router-dom` library.
 * These components are used to set up client-side routing in a React application, allowing for navigation
 * between different pages or views without a full page refresh.
 */
import { BrowserRouter, Route, Routes } from "react-router-dom"

/**
 * Imports the `createTheme`, `ThemeProvider`, and `CssBaseline` components from the `@mui/material` library.
 * These components are used to create and apply a custom theme to a React application, as well as provide a
 * baseline CSS reset to ensure consistent styling across different browsers.
 */
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"


/**
 * Imports the CSS file for the App component, which contains styles and rules for the application.
 * This import ensures that the styles defined in the `App.css` file are applied to the App component
 * and its child components.
 */
import "./App.css"

import Header from "./components/Header"
import Home from "./pages/Home"

import Search from "./pages/Search"
import { Settings, P1, P2, P3, P4, P5, P6, P7, P8 } from "./pages/Settings"

import packageJson from "../package.json"
const { name, version } = packageJson

const defaultSettings = {
   version: version,
   dm: false,
   header: {
      gh: "https://github.com",
      li: "https://linkedin.com",
      tw: "https://twitter.com",
      ig: "https://instagram.com",
      fb: "https://facebook.com",
      ic: "https://icloud.com",
      ib: "https://outlook.office.com/mail/",
      ca: "https://outlook.office.com/calendar/view/month",
      go: "https://www.google.com/travel/flights",
      sm: "https://client.schwab.com/app/accounts/positions/#/",
      ai: "https://chatgpt.com/",
   }
}

/**
 * The main App component of the application. It sets up the routing, theme, and global state management for the application.
 *
 * The App component:
 * - Loads the application's theme and dark mode settings from localStorage.
 * - Manages the dark mode state and updates the body class accordingly.
 * - Provides the theme and state management props to child components through the `themeProps` object.
 * - Sets up the client-side routing using `react-router-dom` components.
 * - Renders the `Header` component and the various page components based on the current route.
 */
export default function App() {
   let stor = localStorage.getItem(name)
   if (stor === null || stor === undefined) {
      stor = JSON.stringify(defaultSettings)
      localStorage.setItem(name, stor)
   }
   const ls = JSON.parse(stor)

   if(ls.version !== version){
      if(confirm("There is a new version of the app available. Would you like to update your settings?")){
         localStorage.setItem(name, JSON.stringify(defaultSettings))
         window.location.reload()
      } else {
         ls.version = version
         localStorage.setItem(name, JSON.stringify(ls))
      }
   }






   const [darkMode, setDarkMode] = useState(ls.dm ?? false)

   useEffect(() => {
      if (darkMode) {
         document.body.classList.add("dark-mode")
      } else {
         document.body.classList.remove("dark-mode")
      }
   }, [darkMode])

   const themeProps = { name, ls, darkMode, setDarkMode }
   const theme = createTheme({
      palette: { mode: darkMode ? "dark" : "light" }
   })

   return (
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header themeProps={themeProps} />
            <Routes>
               <Route path="/" element={<Home themeProps={themeProps} />} />
               <Route path="/search" element={<Search themeProps={themeProps} />}  />
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
      </BrowserRouter>
   )
}
