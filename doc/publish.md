# Publish

At some point you will want to publish your version of gridlinks to the Chrome Web Store, because it is working and you want to share it with the world, or because you want to make it available to other people, or because you want to make sure you understand how this works.

There are a number of articles on the web about publishing a Chrome extension, but the official one is [this one](https://developer.chrome.com/docs/webstore/publish/).

a quick summary of the steps is:

1. [Register](#register) for a Chrome Web Store Developer Account

2. [Prepare](#prepare) your Chrome Extension for Publication

3. [Upload](#upload) your extension to the Chrome Web Store and configure its settings

4. [Submit](#submit) Your Chrome Extension for Review

5. [Twiddle](#wait) your thumbs and wait for approval and publishing to come through


## Register

Registration is  s a simple process you just have to go to [this link](https://chrome.google.com/webstore/devconsole/register), sign in with a google account to be used as developer account, then accept the “Developer Agreement” and pay a one-time $5 registration fee (with that fee, you will be able to publish as many chrome extensions as you desire). Once you have completed the registration process you will be able to access the [Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) where you will be able to create and publish your own extensions. I have been publishing extensions since 2017 and I am amazed that the $5 fee is still there and even more amazed that is has never increaed since then.


## Prepare

Once you have registered for a developer account, you will need to prepare your extension for publication. This involves creating a zip file containing the extension files and a manifest file.


### Build and Test in Production
Before I start publishing my extension I always build it in production mode and test it locally.

#### Update dependencies

Often times I use npm-check-updates to update my dependencies, Using npm check updates regularly can help keep your package manager up to date, which can be important for the security and long-term health of your projects. npm check updates upgrades your package.json dependencies to the latest versions, while maintaining existing semantic versioning policies. It only modifies the package.json file, so you can run npm install to update your dependencies. Install npm-check-updates globally with

> npm install -g npm-check-updates.

Then, run npm-check-updates with the -u or --upgrade flag to upgrade your package.json file. For global packages, you can run with the -g flag.

You can also use npx to run npm-check-updates without installing it globally. For example, you can run npx npm-check-updates:

#### package.js

As part of the build process, we implement package.js as a helper script. This script is used to wrap npm check updates (ncu) and to package the extension into a zip file (noargs).

> gridlinks package utility
> usage: package [patch | minor | -v | -f packagename]]

#### build

To build the extension in production mode, run the following command from the root of your project:

> yarn build

you can make sure that you get a clean build by running the build using ./package.js

```bash
gridlinks$ ./package.js
no arguments, packaging for deployment
Generated an empty chunk: "dom-helpers".
archive created: gridlinks.zip
```

I am including the snippet from package.js here for reference:

```javascript
console.log('no arguments, packaging for deployment')
const dist  = './dist'
shell.rm('-rf',dist)
shell.mkdir('-p',dist)
exec(`yarn build`)

const cdir=shell.pwd()
exec(`open -n -b com.google.chrome --args --pack-extension=${cdir}/dist --pack-extension-key=${cdir}/dist.pem`)

const DEFZIP  = "gridlinks.zip"
const output = fs.createWriteStream(DEFZIP)
const archive = archiver('zip')
archive.pipe(output)
archive.directory('dist', false)
archive.file('auto-update.xml', false)
archive.file('dist.crx', false)
await archive.finalize()
console.log(`archive created: ${DEFZIP}`)

```


## Upload

## Submit

## Wait

---

[Back «](pages)  __Publish__  [» Next](README)