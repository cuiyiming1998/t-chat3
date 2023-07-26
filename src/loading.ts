import type { Ora } from 'ora'
import ora from 'ora'

let spinner: Ora

export function startLoading() {
  spinner = ora('Answering... Please wait a second... \r').start()
}

export function stopLoading() {
  spinner.stop()
}
