import '../style/main.sass'

import Aggregator from './models/Aggregator'
import VirtualDOM from './UI/VirtualDom'
import Title from './UI/Title'

const aggregator = new Aggregator()

aggregator.getFromURL(new URL('https://hnrss.org/newest')),
aggregator.getFromURL(new URL('http://feeds.bbci.co.uk/news/world/europe/rss.xml')),
aggregator.getFromURL(new URL('https://css-tricks.com/feed/'))
aggregator.getFromURL(new URL('https://www.google.com'))
