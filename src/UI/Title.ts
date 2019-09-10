import VirtualDOM from './VirtualDom'

export default class Title {
  private element: HTMLHeadingElement

  constructor (parent: HTMLElement) {
    this.element = document.createElement('h1')
    this.element.textContent = 'AGGRSS!'
    parent.appendChild(this.element)
  }
}
