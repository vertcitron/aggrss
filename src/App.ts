import '../style/main.sass'

import FeedItem from './models/FeedItem'

// temporary DOM insertion to check if everything works
const title = document.createElement('h1')
title.textContent = 'AGGRSS!'
document.body.appendChild(title)

// temporary raw item to check
const item = new FeedItem({
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
})
item.log()
