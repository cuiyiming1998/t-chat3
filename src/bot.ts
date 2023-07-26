import { Configuration, OpenAIApi } from 'openai'
import colors from 'colors'
import { addBotMessage, messages } from './messages.js'

let openAi: OpenAIApi

export function initBot() {
  openAi = new OpenAIApi(
    new Configuration({
      basePath: 'https://api.chatanywhere.cn/v1',
      apiKey: process.env.OPEN_API_KEY,
    }),
  )
}

export async function answer() {
  const chatCompletion = await openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
  })

  const answer = chatCompletion.data.choices[0].message?.content

  addBotMessage(answer!)

  printAnswer(answer!)
}

function printAnswer(answer: string) {
  console.log(`${colors.bold.cyan('   Answer   : ')} ${answer} \n`)
}
