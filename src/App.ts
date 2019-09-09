import '../style/main.sass'

import Aggregator from './models/Aggregator'

// temporary DOM insertion to check if everything works
const title = document.createElement('h1')
title.textContent = 'AGGRSS!'
document.body.appendChild(title)

const aggregator = new Aggregator()

const query1 = aggregator.getFromURL(new URL('https://hnrss.org/newest'))
const query2 = aggregator.getFromURL(new URL('http://feeds.bbci.co.uk/news/world/europe/rss.xml#'))

Promise.all([query1, query2])
  .then(() => {
    aggregator.log()
  })
