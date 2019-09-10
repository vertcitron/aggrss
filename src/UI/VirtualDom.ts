import Aggregator from '../models/Aggregator'
import FeedSelector from './FeedsSelector'
import Title from './Title'
import NewFeedInput from './NewFeedInput'
import FeedItemBlock from './FeedItemBlock'

export default class VirtualDOM {
  readonly body: HTMLBodyElement
  readonly header: HTMLElement
  readonly main: HTMLElement
  readonly footer: HTMLElement

  constructor (aggr: Aggregator) {
    this.body = document.createElement('body')
    this.body.id = 'aggrss'

    this.header = document.createElement('header')
    this.main = document.createElement('main')
    this.footer = document.createElement('footer')
    this.footer.textContent = 'AGGRSS! A simple RSS aggregator in Vanilla Typescript'
    this.body.appendChild(this.header)
    this.body.appendChild(this.main)
    this.body.appendChild(this.footer)
    
    new Title(this.header)
    const newFeed = new NewFeedInput(this.header)
    newFeed.onSubmit((value: string) => {
      aggr.getFromURL(new URL(value))
    })
    new FeedSelector(this.header, aggr)

    for (const feed of aggr.feeds) {
      if (feed.selected) {
        for (const item of feed.items) {
          new FeedItemBlock(this.main, item, feed)
        }
      }
    }
  }

  render () {
    document.body = this.body
  }
}
