import { combineReducers } from 'redux'
import {
  REQUEST_QUOTES, RECEIVE_QUOTES, SELECT_QUERY
} from './actions'

// not uses, just for clarity
const initialState = {
  selectedQuery: {
    from: { label: '', country: '' },
    to: { label: '', country: '' },
    weight: 0
  },
  isFetching: false,
  quotes: {}
}

function selectedQuery(state = initialState.selectedQuery, action) {
  switch (action.type) {
    case SELECT_QUERY:
      return action.query
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_QUOTES:
      return true
    case RECEIVE_QUOTES:
      return false
    default:
      return state
  }
}

function quotes(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUOTES:
      return action.quotes
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedQuery,
  isFetching,
  quotes
})

export default rootReducer
