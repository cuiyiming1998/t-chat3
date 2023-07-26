import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dotenv from 'dotenv'
import { answer, initBot } from './bot.js'
import { ask } from './user.js'
import { startLoading, stopLoading } from './loading.js'
import { welcome } from './welcome.js'

dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), '../.env'),
})

initBot()

;(async () => {
  welcome()
  while (true) {
    ask()
    startLoading()
    await answer()
    stopLoading()
  }
})()
