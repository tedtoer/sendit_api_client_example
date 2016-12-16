import fetch from 'isomorphic-fetch'
import qs from 'qs'
import { API_HOST, API_TOKEN } from './settings'

export const SELECT_QUERY = 'SELECT_QUERY'
export function selectQuery(query) {
  return {
    type: SELECT_QUERY,
    query
  }
}

export const REQUEST_QUOTES = 'REQUEST_QUOTES'
function requestQuotes(query) {
  return {
    type: REQUEST_QUOTES,
    query
  }
}

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'
function receiveQuotes(query, json) {
  return {
    type: RECEIVE_QUOTES,
    query,
    quotes: json
  }
}

export function fetchQuotes(query) {
  return dispatch => {
    dispatch(requestQuotes(query))
    return fetch(
      API_HOST + `/quotes?${qs.stringify(query)}`,
      { headers: { 'Authorization': `Token token=${API_TOKEN}` } }
    ).then(response => response.json())
      .then(json => dispatch(receiveQuotes(query, json)))
      .catch(error => {
        console.log(`request failed ${error}`);
        dispatch(receiveQuotes(query, {}))
      });
  }
}

function shouldFetchQuotes(state) {
  if (state.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchQuotesIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchQuotes(getState())) {
      return dispatch(fetchQuotes(query))
    } else {
      return Promise.resolve()
    }
  }
}
