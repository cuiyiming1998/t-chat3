import readlineSync from 'readline-sync'
import colors from 'colors'
import { addUserMessage } from './messages.js'

export function ask() {
  const userInput = readlineSync.question(`${colors.bold.magenta('  Question  :')}  `)

  checkExit(userInput)

  addUserMessage(userInput)

  return userInput
}

function checkExit(i: string) {
  if (['e', 'q', 'exit', 'quit'].includes(i.toLocaleLowerCase()))
    process.exit()
}
