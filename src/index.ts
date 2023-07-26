import dotenv from 'dotenv'
import { answer, initBot } from './bot'
import { ask } from './user'

dotenv.config()

initBot()

;(async () => {
  while (true) {
    ask()
    await answer()
  }
})()
