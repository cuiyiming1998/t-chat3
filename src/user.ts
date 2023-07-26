import readlineSync from 'readline-sync'
import colors from 'colors'
import { addUserMessage } from './messages'

export function ask() {
  const userInput = readlineSync.question(`${colors.bgMagenta('Question:')}  `)

  checkExit(userInput)

  addUserMessage(userInput)

  return userInput
}

function checkExit(i: string) {
  if (['e', 'exit'].includes(i.toLocaleLowerCase()))
    process.exit()
}
