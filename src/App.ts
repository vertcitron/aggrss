import '../style/main.sass'

import Aggregator from './models/Aggregator'
import VirtualDOM from './UI/VirtualDom'

const aggregator = new Aggregator()

const promises = [
  aggregator.getFromURL(new URL('https://hnrss.org/newest')),
  aggregator.getFromURL(new URL('http://feeds.bbci.co.uk/news/world/europe/rss.xml')),
  aggregator.getFromURL(new URL('https://css-tricks.com/feed/'))
].map(p => p.catch(e => e)) // trick to polyfill Promise.allSettled
