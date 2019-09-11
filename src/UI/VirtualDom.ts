import Aggregator from '../models/Aggregator'
import FeedSelector from './FeedsSelector'
import Title from './Title'
import NewFeedInput from './NewFeedInput'
import FeedItemBlock from './FeedItemBlock'
import FeedItem from '../models/FeedItem'
import Feed from '../models/Feed'

interface ItemFeed {
  item: FeedItem
  feed: Feed
}

function sortByDate (a: ItemFeed, b: ItemFeed) {
  if (a.item.pubDate > b.item.pubDate) return -1
  if (a.item.pubDate < b.item.pubDate) return 1
  return 0
}

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

    const showItems: { item: FeedItem, feed: Feed }[] = []

    for (const feed of aggr.feeds) {
      if (feed.selected) {
        for (const item of feed.items) {
          showItems.push({ item, feed })
          // 
        }
      }
    }

    for (const pair of showItems.sort(sortByDate)) {
      new FeedItemBlock(this.main, pair.item, pair.feed)
    }
  }

  render () {
    document.body = this.body
  }
}
