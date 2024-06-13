 <p align="center">
  <a href="https://codemarc.net">
    <picture></picture><br/><br/>
     <a aria-label="gridlinks logo" href="https://codemarc.net">
        <img src="https://img.shields.io/badge/g r i d l i n k s -blue?style=for-the-badge">
  </a>
    <font size="3">
        <br/><a href="https://codemarc/net">a chrome extension by codemarc</a>
        <br/><a aria-label="License" href="https://github.com/codemarc/gridlinks/blob/main/LICENSE">MIT License
  </a>
    </font>
    </h1>
  </a>
</p>


[Documentation](./doc/README.md) for this project is located in the [docs] folder and using [docsify] we created the [gridlinks][docsite] docsite, deployed at [codemarc.net/doc/gridlinks][docsite].

[docsite]: https://codemarc.net/doc/gridlinks
[docsify]: "https://docsify.js.org/#/"
[docs]: https://github.com/codemarc/gridlinks/tree/main/doc

---

## Introduction

I have been building this application in one form or another for about 30 years. When I start something new, it is one of the first things I work on. More than "hello world", it is something that allows for and encourages learning; a new tool, process, framework, or language. Originally, this was a simple phone list, a quick way to get a phone number over time it has become more of a shared set of pointers to interesting information (a grid of links).

I can remember writing this as a command line tool in [cp/m] using [dbase II] and a [tsr popup] in [ms-dos] using [masm] to create a [borland sidekick] style phone lookup program. Later I remember writing in for [OS/2 pm] in 'C' and then again for [Windows 3.0] using c++ and [mfc], and again as a [netware nlm] and so on. Later it got rewritten in [Windows NT] as a [mmc snapin].

At one point I realized that browsers were next fronteer and we got a [asp version] and then an [asp.net] in C#. And of course lets not forget [java swing] and [servlet] forms.

So it is only natural that when [chrome extension] were introduced this tool found a whole new domain along with some requsite implementations. This will be the 9th time I create a [chrome extension] (my first was in 2017). They have been written as [vanilla html/javascript], [Vue.js] and finally [React].

For this particular version I will use [React + Vite][vite]

[cp/m]: https://en.wikipedia.org/wiki/CP/M
[dbase II]: https://en.wikipedia.org/wiki/DBase
[tsr popup]: https://en.wikipedia.org/wiki/Terminate-and-stay-resident_program
[ms-dos]:https://en.wikipedia.org/wiki/MS-DOS
[masm]: https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler
[borland sidekick]: https://en.wikipedia.org/wiki/Borland_Sidekick
[os/2 pm]: https://en.wikipedia.org/wiki/Presentation_Manager
[Windows 3.0]: https://en.wikipedia.org/wiki/Windows_3.0
[mfc]: https://en.wikipedia.org/wiki/Microsoft_Foundation_Class_Library
[netware nlm]: https://en.wikipedia.org/wiki/NetWare_Loadable_Module
[Windows NT]: https://en.wikipedia.org/wiki/Windows_NT
[mmc snapin]: https://en.wikipedia.org/wiki/Microsoft_Management_Console
[asp version]: https://en.wikipedia.org/wiki/Active_Server_Pages
[asp.net]: https://en.wikipedia.org/wiki/ASP.NET
[java swing]: https://en.wikipedia.org/wiki/Swing_(Java)
[servlet]: https://en.wikipedia.org/wiki/Jakarta_Servlet
[chrome extension]: https://en.wikipedia.org/wiki/Google_Chrome#Extensions
[vanilla html/javascript]: https://en.wikipedia.org/wiki/JavaScript#Web_libraries_and_frameworks
[Vue.js]: https://en.wikipedia.org/wiki/Vue.js
[React]:https://en.wikipedia.org/wiki/React_(JavaScript_library)
[Vite]:https://en.wikipedia.org/wiki/Vite_(software)
[docsify]: "https://docsify.js.org/#/"


## Bootstrap

To get started we bootstrap the project using the vite generated scaffolding.
That gets us the standard React starter program.

### React + Vite

Ths extension was created following these steps

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

This creates `gridlinks` with a basic Vite configuration.

The template I used provided minimal setup to get React working in Vite with HMR and some ESLint rules.

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
|
+---doc                     // the full documentation to be deployed
|   package.json            // build and deploy the doc site
|   deploy.js               // deployment script
|   index.html              // docsify generated home page
|   README.md               // gridlinks doc starts here
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
    +---data
    +---pages
        App.jsx
        App.css
        index.css
        main.jsx
        +---components
        +---settings


```

---

### Chrome Extension

[Chrome extensions]⁠⁠ are software programs built on web technologies that customize the browser experience for a user. The Google developer documentation for building [chrome extensions] is available and the [Hello World](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world) should be reviewed as a starting point for knowledge gathering.

[Chrome extensions]: https://developer.chrome.com/docs/extensions/mv3/

#### manifest.json

Every [chrome extension] include a manifest.json file that describes the extension's capabilities and configuration

```javascript
{
  "manifest_version": 3,
  "name": "CodeMarks",
  "version": "0.0.1",
  "description": "codemarks react vite based chrome extension starter",
  "author": {
    "email": "marc@codemarc.net"
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

I suggest you always provide all 4 icons 128x128, 48x48, 32x32 and 16x16 in png format. For information about best practices, see [Icons](https://developer.chrome.com/docs/extensions/reference/manifest/icons). Make sure you icon look good in all sizes.

