/* eslint-env browser */

import Feed from './Feed'
import { RawFeed } from './RssRawData'

export default class Aggregator {
  readonly feeds: Feed[] = []

  public getFromURL (url: URL): Promise<Feed> {
    const rss2json = 'https://api.rss2json.com/v1/api.json?rss_url='
    return fetch(encodeURI(rss2json + url.href))
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then((raw: RawFeed) => new Feed(raw))
      .then((feed: Feed) => {
        feed.selected = true
        this.feeds.push(feed)
        return Feed
      })
      .catch(error => {
        console.error(error)
        return error
      })
  }

  public log (): void {
    console.log('Feeds =\n', this.feeds)
  }
}
