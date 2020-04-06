import { combineReducers } from 'redux';

import auth from './auth';
import news from './news';
import student from './student';

const rootReducers = combineReducers({
  auth,
  news,
  student,
});

export default rootReducers;
