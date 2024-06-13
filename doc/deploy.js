#!/usr/bin/env node
const pak = require("./package.json")
const exec = require("shelljs.exec")

const DEFNAME = `gridlinks`
const DSERVER = `codemarc@codemarc.net`
const DFOLDER = `codemarc.net/web/`
const DOCTARG = `doc/${DEFNAME}/`

// =============================================================================
const deployDoc = async () => {
   const log = (txt) => console.log(`${DEFNAME}: ${txt}`)
   log(`creating/updating deployment`)
   await exec(`ssh ${DSERVER} "cd ${DFOLDER} && mkdir -p ${DOCTARG}"`)
   log(`copying index.html and README.md to ${DOCTARG}`)
   await exec(`scp ./index.html ${DSERVER}:${DFOLDER}/${DOCTARG}`)
   await exec(`scp ./README.md ${DSERVER}:${DFOLDER}/${DOCTARG}`)
}

// =============================================================================
// main
// =============================================================================
(async () => {
   console.log(`\n${pak.name} v${pak.version} - ${pak.description}\n`)
   await deployDoc()
   console.log(`done!\n`)
})()

