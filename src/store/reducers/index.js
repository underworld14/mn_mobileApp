import { combineReducers } from 'redux';

import auth from './auth';
import news from './news';

const rootReducers = combineReducers({
  auth,
  news,
});

export default rootReducers;
