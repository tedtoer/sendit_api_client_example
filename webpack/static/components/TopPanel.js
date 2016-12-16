import React, { Component, PropTypes } from 'react'

export default class TopPanel extends Component {
  getParams() {
    return {
      from: { label: this.fromInput.value },
      to: { label: this.toInput.value },
      weight: this.weightInput.value
    }
  }

  render() {
    const {
      selectedQuery, onClick
    } = this.props

    return (
      <div className='top-panel'>
        <input className='from'
          ref={(input) => { this.fromInput = input; }}
          type='text' placeholder='От куда'
          defaultValue={selectedQuery.from.label}
        />
        <input className='to'
          ref={(input) => { this.toInput = input; }}
          type='text' placeholder='Куда'
          defaultValue={selectedQuery.to.label}
        />
        <input className='weight'
          ref={(input) => { this.weightInput = input; }}
          type='text' placeholder='Вес'
          defaultValue={selectedQuery.weight}
        />
        <div className='search-btn' onClick={e => onClick(this.getParams())}>
          <i className="fa fa-search" aria-hidden="true"></i> Найти
        </div>
        <div className='separ'></div>
      </div>
    )
  }
}

TopPanel.propTypes = {
  selectedQuery: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}
