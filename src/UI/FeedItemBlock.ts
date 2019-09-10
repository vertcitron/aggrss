import FeedItem from '../models/FeedItem'

export default class FeedItemBlock {
  private wrapper: HTMLDivElement

  constructor (parent: HTMLElement, item: FeedItem) {
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'feeditem'
    this.wrapper.textContent = item.title

    parent.appendChild(this.wrapper)
  }
}
