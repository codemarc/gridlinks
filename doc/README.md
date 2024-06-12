 <p align="center">
  <a href="https://codemarc.net">
    <picture></picture><br/><br/>
     <a aria-label="gridlinks logo" href="https://codemarc.net">
        <img src="https://img.shields.io/badge/g r i d l i n k s -blue?style=for-the-badge">
  </a>
    <font size="3">
        <br/>a chrome extension by codemarc
        <br/><a aria-label="License" href="https://github.com/codemarc/gridlinks/blob/main/LICENSE">MIT License
  </a>
    </font>
    </h1>
  </a>
</p>


## Introduction

I have been building this applcation in one form or another for about 30 years. When I start something new it is one of the first thing I work on. More then "hello world\n" it is something the allows for and encourages learning; a new tool, process, framework, or language.

I can remember writing this as a command line tool in cp/m using dbase II and a tsr popup in ms-dos using assembler like borland sidekick to lookup customer info. Later I remember writing in for OS/2 pm in 'C' and then again for Windows 3.0 mfc c++, and again as a netware nlm and so on. Later it got rewritten in Windows NT as a service contol panel app and mmc snapin.

At one point I realized that browsers were next fronteer and we got a asp version and then an asp.net C#. And of course lets not forget java swing and servlet forms.

So it is only natural that when chrome extension were introduced this tool found a whole new domain along with some requsite implementations. This will be the 9th time I create a chrome extension (my first was in 2017). They have been written as vanilla html/javascript, Vue.js and finally React.

For this particular version I will use React + Vite

## Bootstrap with React + Vite

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


