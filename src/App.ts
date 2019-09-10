import '../style/main.sass'

import Aggregator from './models/Aggregator'

// temporary DOM insertion to check if everything works
const title = document.createElement('h1')
title.textContent = 'AGGRSS!'
document.body.appendChild(title)

const aggregator = new Aggregator()

const promises = [
  aggregator.getFromURL(new URL('https://hnrss.org/newest')),
  aggregator.getFromURL(new URL('https://www.google.fr')),
  aggregator.getFromURL(new URL('http://feeds.bbci.co.uk/news/world/europe/rss.xml')),
  aggregator.getFromURL(new URL('https://hnrss.org/newest')),
  aggregator.getFromURL(new URL('https://nonexistingweb.site')),
  aggregator.getFromURL(new URL('https://css-tricks.com/feed/'))
].map(p => p.catch(e => e)) // trick to polyfill Promise.allSettled

Promise.all(promises)
  .then(() => {
    aggregator.remove('http://feeds.bbci.co.uk/news/world/europe/rss.xml')
    aggregator.remove('https://www.google.com')
  })
