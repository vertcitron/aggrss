export default class VirtualDOM {
  readonly body: HTMLBodyElement

  constructor () {
    this.body = document.createElement('body')
    this.body.id = 'aggrss'
  }

  render () {
    document.body = this.body
  }
}
