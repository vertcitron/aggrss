import { RawFeedItem } from './RssRawData'
import toUrlOrNull from '../libs/toUrlOrNull'

// The class managing the items included inside each feed
export default class FeedItem {
  readonly author: string
  readonly categories: string[]
  readonly content: string
  readonly description: string
  readonly enclosure: {
    url: URL | null;
    length: number;
    type: MimeType | null;
  }

  readonly guid: string
  readonly link: URL | null
  readonly pubDate: Date
  readonly thumbnail: URL | null
  readonly title: string

  constructor (raw: RawFeedItem) {
    this.author = raw.author || ''
    this.categories = raw.categories || []
    this.content = raw.content || ''
    this.description = raw.description || ''
    this.enclosure = {
      url: raw.enclosure ? toUrlOrNull(raw.enclosure.url) : null,
      length: raw.enclosure ? raw.enclosure.length || 0 : 0,
      type: raw.enclosure ? raw.enclosure.type || null : null
    }
    this.guid = raw.guid || ''
    this.link = toUrlOrNull(raw.link)
    this.pubDate = new Date(raw.pubDate)
    this.thumbnail = toUrlOrNull(raw.thumbnail)
    this.title = raw.title || ''
  }

  public log (): void {
    console.log('Feed Item =', this)
  }
}
