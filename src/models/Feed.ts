import { RawFeed } from './RssRawData'
import FeedItem from './FeedItem'
import toUrlOrNull from '../libs/toUrlOrNull'

export default class Feed {
  readonly author: string
  readonly description: string
  readonly image: URL | null
  readonly link: URL | null
  readonly title: string
  readonly url: URL
  public status: string
  public selected: boolean
  public items: FeedItem[]

  constructor (raw: RawFeed) {
    // First create what will always work
    this.author = raw.feed.author || ''
    this.description = raw.feed.description || ''
    this.title = raw.feed.title || ''
    this.status = raw.status
    this.selected = true
    this.items = []
    this.url = new URL(raw.feed.url)
    // then what may fail...
    try {
      this.image = toUrlOrNull(raw.feed.image)
      this.link = toUrlOrNull(raw.feed.link)
      for (const item of raw.items) {
        this.items.push(new FeedItem(item))
      }
    } catch (error) {
      console.error(`Error creating Feed "${this.title}": ${error.message}`)
      this.image = null
      this.link = null
      this.items = []
      this.status = 'error'
    }
  }

  // In order to be able to visualize before having an IHM
  public log (): void {
    console.log('Feed =\n', this)
  }
}
