import Session from './lib/Session'
import API from './lib/API'

export default class Beachball {
  constructor ({
    client_id = '',
    redirect_uri = '',
    version = '',
    access_token = '',
    baseUrl = 'https://migme-sandcastle.herokuapp.com'
  } = {}) {
    Object.assign(this, {
      client_id,
      redirect_uri,
      version,
      access_token,
      baseUrl
    })

    this.API = new API(this)
    this.Session = new Session(this)
  }
}