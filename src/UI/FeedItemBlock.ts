import FeedItem from '../models/FeedItem'
import Feed from '../models/Feed'

export default class FeedItemBlock {
  private wrapper: HTMLDivElement

  constructor (parent: HTMLElement, item: FeedItem, feed: Feed) {
    const openLink = item.link ? `<a href="${item.link.href}" target="_blank">` : ''
    const closeLink = item.link ? '</a>' : ''
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'feeditem'
    this.wrapper.innerHTML = `
      <header>
        <h3>${openLink}${item.title}${closeLink}</h3>
        <h4>${feed.title}</h4>
      </header>
      <h5>${item.pubDate.toLocaleDateString()} by ${item.author}</h5>
      <section>
        ${item.content}
      </section>
    `

    parent.appendChild(this.wrapper)
  }
}
