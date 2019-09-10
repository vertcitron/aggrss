import Aggregator from '../models/Aggregator'
import FeedSelector from './FeedsSelector'
import Title from './Title'

export default class VirtualDOM {
  readonly body: HTMLBodyElement
  readonly header: HTMLElement
  readonly main: HTMLElement
  readonly footer: HTMLElement
  readonly feedSelector: FeedSelector

  constructor (aggr: Aggregator) {
    this.body = document.createElement('body')
    this.body.id = 'aggrss'

    this.header = document.createElement('header')
    this.main = document.createElement('main')
    this.footer = document.createElement('footer')
    this.body.appendChild(this.header)
    this.body.appendChild(this.main)
    this.body.appendChild(this.footer)
    
    new Title(this.header)
    new FeedSelector(this.header, aggr)
  }

  render () {
    document.body = this.body
  }
}
