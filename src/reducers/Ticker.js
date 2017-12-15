import { fromJS } from 'immutable';

import { normalizeTickerData } from './../utils/normalizer';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  isFetchedOnce: false,
  error: {},
  data: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKER_UPDATE_INIT':
      return state.merge({
        isFetching: true,
        isFetchingError: false
      });

    case 'FETCH_TICKER_UPDATE_FINISHED':
      return state.merge({
        isFetching: false,
        isFetchingError: false,
        data: normalizeTickerData(action.data, state.get('data'))
      });

    case 'FETCH_TICKER_UPDATE_ERRORED':
      return state.merge({
        isFetching: false,
        isFetchingError: true,
        error: action.error
      });

    default:
      return state;
  }
};
