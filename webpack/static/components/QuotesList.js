import React, { PropTypes, Component } from 'react'
import ProviderBlock from './ProviderBlock'

export default class QuotesList extends Component {
  render() {
    const quotes = this.props.quotes
    
    return (
      <div className='quotes-list'>
        {Object.keys(quotes).map(function (provider, id) {
          return <ProviderBlock key={id} provider_name={provider} provider_quotes={quotes[provider]} />
        })}
      </div>
    )
  }
}

QuotesList.propTypes = {
  quotes: PropTypes.object.isRequired
}
