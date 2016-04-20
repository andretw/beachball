/* global beforeEach, afterEach, describe, it */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import Beachball from '../src'

chai.use(sinonChai)
chai.use(chaiAsPromised)

describe('UI', () => {
  it('should be a function', () => {
    expect(Beachball.ui).to.be.a('function')
  })

  if (typeof window !== 'undefined') {
    describe('sharing post will open a popup window', () => {
      beforeEach(() => {
        sinon.stub(window, 'open')
      })
      it('should open a window', () => {
        const params = {method: 'share', href: 'https://alivenotdead.com'}
        Beachball.ui(params)
        expect(window.open).to.have.been.calledWith(
          'https://mig.me/share_to_mig33?referrer=&campaign=&return_url=&href=http%3A%2F%alivenotdead.com'
        )
      })
      afterEach(() => {
        window.open.restore()
      })
    })
  }
})
