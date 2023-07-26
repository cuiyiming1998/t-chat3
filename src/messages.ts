interface Message {
  role: 'user' | 'assistant'
  content: string
}

export const messages: Message[] = []

export function addUserMessage(content: string) {
  clearMessages()
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

function clearMessages() {
  const shouldClear = messages.length > 5
  shouldClear && (messages.splice(0, messages.length))
}
