#!/bin/env node
import shell from 'shelljs'
import exec from 'shelljs.exec'
import archiver from 'archiver'
import fs from 'fs'

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