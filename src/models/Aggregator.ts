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
    // feed comparison are based on URLs
    const feedsUrls = this.feeds.map(item => item.url.href)
    return feedsUrls.includes(feed.url.href)
  }

  public remove (feed: Feed | URL | string) {
    let url: string = ''
    if (feed instanceof Feed) url = feed.url.href
    if (feed instanceof URL) url = feed.href
    url = <string>feed
    const index = this.feeds.map(f => f.url.href).indexOf(url)
   if (index > -1) {
      this.feeds.splice(index, 1)
      console.log(`Removed feed ${url}`)
      this.log()
    } else {
      console.error(`Error when removing feed ${url} :`)
      console.error('This feed was not in the aggregator.')
    }
  }
}