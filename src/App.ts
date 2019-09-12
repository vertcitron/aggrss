import '../style/main.sass'

import Feed from './models/Feed'

// temporary DOM insertion to check if everything works
const title = document.createElement('h1')
title.textContent = 'AGGRSS!'
document.body.appendChild(title)

// temporary raw item to check
const item = {
  author: 'Me',
  categories: [],
  content: 'Item content',
  description: 'Item description',
  enclosure: {},
  guid: 'Item guid',
  link: 'https://www.google.com',
  pubDate: '2019-09-09T00:00',
  thumbnail: '',
  title: 'Item title'
}

// temporary feed to check, having 2 times the item just created
const feed = new Feed({
  feed: {
    author: 'Me',
    description: 'Feed description',
    title: 'Feed title',
    url: 'https://hnrss.org/frontpage',
    link: 'https://hnrss.org/frontpage'
  },
  status: 'ok',
  items: [item, item]
})

feed.log()
