import '../style/main.sass'

import Aggregator from './models/Aggregator'

// temporary DOM insertion to check if everything works
const title = document.createElement('h1')
title.textContent = 'AGGRSS!'
document.body.appendChild(title)

const aggregator = new Aggregator()

aggregator.getFromURL(new URL('https://hnrss.org/newest'))
aggregator.getFromURL(new URL('https://www.google.fr'))
aggregator.getFromURL(new URL('http://feeds.bbci.co.uk/news/world/europe/rss.xml#'))
aggregator.getFromURL(new URL('https://hnrss.org/newest'))
aggregator.getFromURL(new URL('https://nonexistingweb.site'))
