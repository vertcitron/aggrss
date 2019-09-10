import Aggregator from '../models/Aggregator'
import FeedBlock from './FeedBlock'

export default class FeedSelector {
  private wrapper: HTMLDivElement

  constructor (parent: HTMLElement, aggr: Aggregator) {
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'feedselector'
    for (const feed of aggr.feeds) {
      new FeedBlock(this.wrapper, feed)
    }
    parent.appendChild(this.wrapper)
  }
}
