/* eslint-env browser */

import Feed from './Feed'
import { RawFeed } from './RssRawData'

export default class Aggregator {
  readonly feeds: Feed[] = []

  public getFromURL (url: URL): Promise<Feed> {
    const rss2json = 'https://api.rss2json.com/v1/api.json?rss_url='
    return fetch(encodeURI(rss2json + url.href))
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText || 'No valid feed at this URL.')
        }
        return response.json()
      })
      .then((raw: RawFeed) => new Feed(raw))
      .then((feed: Feed) => {
        if (this.hasFeed(feed)) {
          throw new Error('That feed has already been added.')
        }
        feed.selected = true
        this.feeds.push(feed)
        console.log(`Added new Feed @ ${feed.url.href}`)
        this.log()
        return Feed
      })
      .catch(error => {
        console.error(`Error when adding feed @ ${url.href} :`)
        console.error(error)
        this.log()
        return error
      })
  }

  public log (): void {
    console.log(this.feeds)
  }

  public hasFeed(feed: Feed): boolean {
    const feedsUrls = this.feeds.map(item => item.url.href)
    return feedsUrls.includes(feed.url.href)
  }
}
