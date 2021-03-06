import urltemplate from 'url-template'
import config from '../config'
import saveSession from './save-session'
import { awaitMessage } from '../utils/async'

const API_URL_LOGIN = `{+baseUrl}/login-page/{?${[
  'callback',
  'callback_type',
  'client_id',
  'redirect_uri',
  'scope'
]}}`

const loginMethods = {
  popup () {
    const data = Object.assign({
      callback_type: 'popup'
    }, config)
    const url = urltemplate.parse(API_URL_LOGIN).expand(data)
    const dialog = openWindow(url)
    return awaitMessage(dialog)
  },

  redirect () {
    const data = Object.assign({
      callback_type: 'redirect'
    }, config)
    const url = urltemplate.parse(API_URL_LOGIN).expand(data)
    window.location.href = url
  }
}

function openWindow (url) {
  return window.open(url)
}

// Login
export default async function (type = 'popup', ...args) {
  const delegate = loginMethods[type]
  return delegate(...args).then(res => {
    saveSession(res)
    return res
  })
}
