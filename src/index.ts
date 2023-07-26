import dotenv from 'dotenv'
import { answer, initBot } from './bot.js'
import { ask } from './user.js'
import { startLoading, stopLoading } from './loading.js'

dotenv.config()

initBot()

;(async () => {
  while (true) {
    ask()
    startLoading()
    await answer()
    stopLoading()
  }
})()
