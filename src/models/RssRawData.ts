// These interfaces are reflecting what can be found in standard RSS feed and
// are here to provide good type inference.

export interface RawFeedItem {
  author: string
  categories?: string[]
  content: string
  description?: string
  enclosure?: {
    url?: string
    length?: number
    type?: MimeType
  }
  guid: string
  link: string
  pubDate: string
  thumbnail?: string
  title: string
}

export interface RawFeed {
  feed: {
    author: string
    description: string
    image?: string
    link: string
    title: string
    url: string
  }
  items: RawFeedItem[]
  status: string
}
