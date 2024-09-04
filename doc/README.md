<a id="top"/>

# [Gridlinks](https://codemarc.net/doc/gridlinks)
<div style="font-size:10pt;margin-top:-12px;font-style:italic"><a href="https://codemarc.net">a chrome extension by codemarc consulting.</a></div>
<br/>

![GitHub License](https://img.shields.io/github/license/codemarc/gridlinks?link=https%3A%2F%2Fgithub.com%2Fcodemarc%2Fgridlinks%2Fblob%2Fmain%2FLICENSE)
![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/ofpobifnipafncfehmgeknfkgojkbgke?color=blue&link=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fgridlinks%2Fofpobifnipafncfehmgeknfkgojkbgke)
![GitHub last commit](https://img.shields.io/github/last-commit/codemarc/gridlinks)


The complete [documentation](./doc/README.md) for this [project] is located in the   [docs] folder and using [docsify] we created the [gridlinks][docsite]   docsite, deployed at [codemarc.net/doc/gridlinks][docsite]. *You can install the latest version from the [chrome-web-store]*. If you are looking for the gridsvcs documentation, please see [gridsvcs](https://github.com/codemarc/gridsvcs).
<br/><br/>


## Introduction

Gridlinks has been a personal project of the author for about 30 years, evolving from a simple phone list to a comprehensive link management tool. This Chrome extension version is built using React and Vite, showcasing modern web development practices.

### Features

* Customizable grid of links
* Quick access to frequently used resources
* Easy to use interface
* Lightweight and fast

## Installation

You can install Gridlinks from the Chrome Web Store.

For manual installation:

1. Download the latest release from the releases page.

2. Unzip the file.

3. In Chrome, go to chrome://extensions/.

4. Enable "Developer mode" in the top right.

5. Click "Load unpacked" and select the unzipped folder.

### Usage

After installation, click on the Gridlinks icon in your Chrome toolbar to open the extension. You can add, edit, and organize your links from the settings page.

## Development

1. Clone the repository:

```bash
git clone https://github.com/codemarc/gridlinks.git
cd gridlinks
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

### Building
To build the extension for production, run:

```bash
yarn build
```

This will create a `dist` folder with the extension files.

### Packaging

To package the extension for distribution, run:
```bash
yarn package
```

This creates a clean `dist` folder with the extension files. It then creates runs chrome to pack the extension and finally it creates gridlinks.zip,  a zip file that can be uploaded to the Chrome Webstore.

### Documentation

The complete [documentation](./doc/README.md) for this [project] is located in the   [docs] folder and using [docsify] we created the [gridlinks][docsite]   docsite, deployed at [codemarc.net/doc/gridlinks][docsite].

To work on the documentation, you can use the [docsify] tool locally

```bash
$ yarn doc
yarn run v1.22.22
$ cd doc && yarn doc && cd ..
$ docsify serve -p 3001 .

Serving /Users/marc/cmc/gridlinks/doc now.
Listening at http://localhost:3001
```

To update the docsite (assuming you have the right permissions):
```bash
$ yarn doc:deploy
yarn run v1.22.22
$ cd doc && yarn deploy && cd ..
$ node deploy.js

gridlinks v0.0.14 - build and deploy the gridlinks doc site

gridlinks: creating/updating deployment
gridlinks: copying index.html and *.md to doc/gridlinks
gridlinks: copying assets to doc/gridlinks/img
done!

✨  Done in 13.91s.
```


### Prerequisites

* Node.js (v14 or later)
* Yarn package manager
* Chrome browser

### Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before making a pull request.


---

[Back «](#top)  __Gridlinks__  [» Next](design)


<!-- Engage Cloaking Device -->
[project]: https://github.com/codemarc/gridlinks/tree/main
[docsite]: https://codemarc.net/doc/gridlinks
[docsify]: https://docsify.js.org/#/
[docs]: https://github.com/codemarc/gridlinks/tree/main/doc
[chrome-web-store]: https://chromewebstore.google.com/detail/gridlinks/ofpobifnipafncfehmgeknfkgojkbgke
