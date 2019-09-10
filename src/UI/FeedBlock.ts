import crossIcon from '../../images/cancel.svg'
import Feed from '../models/Feed'

export default class FeedBlock {
  private wrapper: HTMLDivElement
  private select: HTMLInputElement
  private name: HTMLDivElement
  private close: HTMLImageElement

  constructor (parent: HTMLElement, feed: Feed) {
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'feedblock'
    if (feed.status !== 'ok') this.wrapper.classList.add('error')
    if (!feed.selected) this.wrapper.classList.add('unselected')

    if (feed.status === 'ok') {
      this.select = document.createElement('input')
      this.select.type = 'checkbox'
      this.select.checked = feed.selected
      this.select.addEventListener('click', e => {
        feed.toggle()
      })
      this.wrapper.appendChild(this.select)
    }


    this.name = document.createElement('div')
    this.name.textContent = feed.title
    this.wrapper.appendChild(this.name)

    this.close = document.createElement('img')
    this.close.src = crossIcon
    this.close.addEventListener('click', e => {
      feed.remove()
    })
    this.wrapper.appendChild(this.close)

    parent.appendChild(this.wrapper)
  }
}
