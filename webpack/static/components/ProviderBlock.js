import React, { Component, PropTypes } from 'react'

export default class ProviderBlock extends Component {
  render() {
    const { provider_quotes, provider_name } = this.props

    return (
      <div className='provider-block'>
        <h3>{provider_name}</h3>
        {provider_quotes.map((quote, i) =>
          <div key={i} className='quote-block'>
            <p>Тип доставки: {quote.type_name}</p>
            <p>Цена: {quote.price} руб.</p>
            <p>Срок: {quote.days} дней</p>
            <p><a href={quote.order_url} target='_blank'>Перейти к созданию заказа</a></p>
          </div>
        )}
        <div className='separ'></div>
      </div>
    )
  }
}

ProviderBlock.propTypes = {
  provider_quotes: PropTypes.array.isRequired,
  provider_name: PropTypes.string.isRequired
}
