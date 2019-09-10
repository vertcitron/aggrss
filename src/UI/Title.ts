import VirtualDOM from './VirtualDom'

export default class Title {
  private element: HTMLHeadingElement

  constructor () {
    this.element = document.createElement('h1')
    this.element.textContent = 'AGGRSS!'
  }

  render (vDom: VirtualDOM) {
    vDom.body.appendChild(this.element)
  }
}
