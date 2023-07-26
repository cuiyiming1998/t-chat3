import colors from 'colors'

export function welcome() {
  console.log(colors.bold.yellow('\n  ChatBox-3.5 \n'))
  console.log(colors.cyan('\n  Welcome to your new chat ♪♪♪ ヽ(ˇ∀ˇ )ゞ  \n'))
  console.log(colors.cyan(`\n  Press ${colors.bold.italic.cyan('[\'e\', \'q\', \'exit\', \'quit\'] + \'Enter\'')} to Quit.  \n \n`))
}
