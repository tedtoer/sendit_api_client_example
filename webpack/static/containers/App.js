import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectQuery, fetchQuotesIfNeeded, clickSearch } from '../actions'
import TopPanel from '../components/TopPanel'
import QuotesList from '../components/QuotesList'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedQuery !== this.props.selectedQuery) {
      const { dispatch, selectedQuery } = nextProps
      dispatch(fetchQuotesIfNeeded(selectedQuery))
    }
  }

  handleClick(query) {
    this.props.dispatch(selectQuery(query))
  }

  render() {
    const {
      selectedQuery, quotes, isFetching
    } = this.props

    return (
      <div>
        <TopPanel
          onClick={this.handleClick}
          selectedQuery={selectedQuery}
        />
        {isFetching &&
          <h2>Загрузка...</h2>
        }
        {!isFetching && Object.keys(quotes).length === 0 &&
          <h2>Пусто</h2>
        }
        {Object.keys(quotes).length > 0 && !isFetching &&
          <QuotesList quotes={quotes} isFetching={isFetching} />
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedQuery: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
