import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import "./App.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { Settings, P1, P2, P3, P4, P5, P6, P7, P8 } from "./pages/Settings"
import packageJson from "../package.json"
const { name, version } = packageJson

export default function App() {

   let stor = localStorage.getItem(name)
   if (stor === null || stor === undefined) {
      stor = JSON.stringify({
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
            ai: "https://chatgpt.com/"
         }
      })
      localStorage.setItem(name, stor)
   }


   const ls = JSON.parse(stor)
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
      palette: { mode: darkMode ? "dark" : "light" },
   })

   return (
      <BrowserRouter>
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
      </BrowserRouter>
   )
}
