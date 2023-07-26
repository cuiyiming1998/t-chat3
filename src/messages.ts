interface Message {
  role: 'user' | 'assistant'
  content: string
}

export const messages: Message[] = []

export function addUserMessage(content: string) {
  addMessage({
    role: 'user',
    content,
  })
}

export function addBotMessage(content: string) {
  addMessage({
    role: 'assistant',
    content,
  })
}

function addMessage(message: Message) {
  messages.push(message)
}
