import { SOCKET_SERVER_URL } from './../utils/constants';

/**
 * Fetch ticker updates from the WebSocket server
 */
const fetchTickerUpdates = () => dispatch => {

  //Initializing WebSocket
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  let connection = new WebSocket(SOCKET_SERVER_URL);

  //Websocket connection is open
  connection.onopen = function () {
    dispatch({ type: 'FETCH_TICKER_UPDATE_INIT' });
  };

  //Dispatch the update event on a new message with the updated data
  connection.onmessage = function (message) {
    const parsedData = JSON.parse(message.data);
    dispatch({
      type: 'FETCH_TICKER_UPDATE_FINISHED',
      data: parsedData
    });
  };
};

export default {
  fetchTickerUpdates
};
