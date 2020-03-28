import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(logger, thunk);

export default middlewares;
