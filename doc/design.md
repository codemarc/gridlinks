# Design

Creating a UI design for a Chrome extension involves understanding the primary functionality and ensuring a user-friendly experience. It startes with a vision.

<img src="img/gridlinks-design.png" width="50%" vspace="20">

## Purpose and Features

  Gridlinks is a system designed to enhance productivity at various levels - individual, team, department, or company-wide. It accomplishes this by providing a published, shared set of managed links. These links presumably lead to resources, tools, or services that aid in productivity. The system is designed to be easily updated using standard update mechanisms, ensuring that the links remain relevant and useful over time.

  Gridlinks is to accessible at your fingertips, it could be a chrome extension or it couuld be a menu application on macOSX or on Windows, a System Tray application. These applications run in the background and their icons reside in the system tray.

  For the chrome extension we expect that
  * Customization via settings is supported at every level
  * A mechanism for user defined content is available
  * Modern UI features like "Dark Mode" is supported

## Layout
* Main Toolbar Icon: This is the entry point for users to interact with your extension.
* Popup Interface: A small window that appears when the toolbar icon is clicked.
* A Header/Details sections to implement the grid.

## Design Elements
* Toolbar Icon: Simple, recognizable icon (16x16, 32x32, 48x48, 128x128).
* Popup Interface:
   * Header: Logo and Title and common key icons
   * Main Content: Key features and controls.
   * Settings Content: Links to settings and help.

### Wireframe Example
Here's an example wireframe for a Chrome extension popup:

<img src="img/gridlinks-frame1.png" width="50%" vspace="20">


## Steps

### Building the Gridlinks Chrome Extension from Scratch

These instruction will guide you through the process of creating a basic Chrome extension from scratch. This will be start as a simple extension that displays a message when the user clicks on the extension's icon.

#### Scaffolding

Scaffolding is the process of creating the initial structure of a project. In this case, we'll be using [Vite](https://vitejs.dev/) to create a new [React](https://react.dev/) application.

1. Create a new project
2. Install dependencies
3. Create a React application

```code
$ npm init vite@latest
✔ Project name: … gridlinks
✔ Select a framework: › React
✔ Select a variant: › JavaScript + SWC

Scaffolding project in wip/gridlinks...

Done. Now run:

  cd gridlinks
  yarn install
  yarn run dev
```
This creates `gridlinks` with a basic Vite configuration. The template I used provided minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Opinionated

The gridlinks repository implements a logical and intuitive file layout/organization. The principle of 'convention over Configuration' offers significant insights. By embracing this layout as a standard, you can minimize the number of decisions to be made, thereby reducing complexity and allowing you to concentrate on content. The annotated structure is presented below. Some filenames have been excluded for brevity.

```code
GRIDLINKS
|   README.md               // a barebones readme to point at this file
|   .editorconfig           // config for the editor config plug
|   .gitignore              // stuff that git should ignore
|   package.json            // module definition
|   vite.config.js          // vite configuration
|   manifest.json           // manifest file for extension
|   index.html              // app loader
|
+---.vscode                 // common config when using vscode
|   extensions.json         // suggested extension vscode
|   gridlinks.code-profile  // vscode importable profile
|
+---doc                     // the full documentation to be deployed
|   package.json            // build and deploy the doc site
|   deploy.js               // deployment script
|   index.html              // docsify generated home page
|   README.md               // gridlinks doc starts here
|   +---img                 // doc images
|
+---assets                  // extension assets
|   logo16.png
|   logo32.png
|   logo48.png
|   logo128.png
|
+---public                  // folder for public assets
|
\---src                     // source code for the extension
    +---components
    +---data
    +---pages
        App.jsx
        App.css
        index.css
        main.jsx
        +---settings


```

### Chrome Extensions

[Chrome extensions]⁠⁠ are software programs built on web technologies that customize the browser experience for a user. The Google developer documentation for building [chrome extensions] is available and the [Hello World](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world) should be reviewed as a starting point for knowledge gathering.

#### vite.config.js

In order to build our chrome extension using [Vite] there are some additional items that must be managed.
Thankfully there is an open source plugin [CRXJS Vite Plugin] to bundle our extension. I suggest you update
your [Vite configuration](https://vitejs.dev/config/) to use the crxjs plugin and configure hmr (hot module replacement) server port definition. We also should add a starter [manifest.json](#chrome-extension)

yarn add -D @crxjs/vite-plugin

```json
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://crxjs.dev/vite-plugin
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    port: 3000
  }
})
```

Beyond those changes I think we should add the use of the version from package.json which is documented in the help for [crxjs/manifest](https://crxjs.dev/vite-plugin/concepts/manifest)



#### manifest.json

Every [chrome extension] must include a manifest.json file that describes the extension's capabilities and configuration

```javascript
{
  "manifest_version": 3,
  "name": "Gridlinks",
  "description": "Codemarc's Gridlinks implementation - react vite based chrome extension starter",
  "homepage_url": "https://codemarc.net/doc/gridlinks/#/",
  "author": {
    "email": "codemarc@gmail.com"
  },
  "action": { "default_popup": "index.html" },
  "icons": {
    "16": "assets/logo16.png",
    "32": "assets/logo32.png",
    "48": "assets/logo48.png",
    "128": "assets/logo128.png"
  }
}
```

Lets review some of the items above

##### "action"

Defines the appearance and behavior of the extension's icon in the Google Toolbar. For more information, see [chrome.action](https://developer.chrome.com/docs/extensions/reference/api/action).

##### "icons"

I suggest you always provide all 4 icons 128x128, 48x48, 32x32 and 16x16 in png format. For information about best practices, see [Icons](https://developer.chrome.com/docs/extensions/reference/manifest/icons). Make sure you icon look good in all sizes. If you need to creaate a logo you can use any of the modern design tool for
insperation. I have used https://www.design.com/ for this purpose.

### Wash Rinse Repeat

If you have been following along you should be able to run
yarn build and see the following output:

```bash
marc:~/cmc/gridlinks$ yarn build
yarn run v1.22.22

$ vite build
vite v5.2.13 building for production...
✓ 36 modules transformed.
dist/index.html                       0.46 kB │ gzip:  0.30 kB
dist/manifest.json                    0.49 kB │ gzip:  0.28 kB
dist/.vite/manifest.json              0.54 kB │ gzip:  0.23 kB
dist/assets/logo16.png                3.17 kB
dist/assets/react-CHdo91hT.svg        4.13 kB │ gzip:  2.05 kB
dist/assets/logo32.png                6.81 kB
dist/assets/logo48.png               10.60 kB
dist/assets/logo128.png              27.66 kB
dist/assets/index-DiwrgTda.css        1.39 kB │ gzip:  0.72 kB
dist/assets/index.html-DONsvf3q.js  143.36 kB │ gzip: 46.09 kB
✓ built in 830ms
✨  Done in 1.42s.

```

or you could the the dev server....

```bash

marc:~/cmc/gridlinks$ yarn dev
yarn run v1.22.22

$ vite
Re-optimizing dependencies because vite config has changed

  VITE v5.2.13  ready in 363 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
7:01:25 AM [crx] files start dist
7:01:26 AM [crx] files ready in 267ms
7:01:26 AM [vite] ✨ optimized dependencies changed. reloading
7:01:26 AM [crx] files start dist
7:01:26 AM [crx] files ready in 78ms

```

Then connect to http://localhost:3000

![](img/gridlinks-step2.png)


---

## Redux

First we need to re-form/transform the current scaffolding code, to shape it into a structure that resembles the [opinionated](design#opinionated) structure that was previously discussed.
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


and when we ready to start working on the components of the system.


---

[Back «](README)  __Design__  [» Next](components)


<!-- Links -->
[Chrome extensions]: https://developer.chrome.com/docs/extensions/mv3/
[React]:https://en.wikipedia.org/wiki/React_(JavaScript_library)
[Vite]:https://en.wikipedia.org/wiki/Vite_(software)
[CRXJS Vite Plugin]: https://crxjs.dev/vite-plugin
