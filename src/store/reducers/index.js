import { combineReducers } from 'redux';

import auth from './auth';
import news from './news';
import student from './student';
import classroom from './classroom';
import hostel from './hostel';

const rootReducers = combineReducers({
  auth,
  news,
  student,
  classroom,
  hostel,
});

export default rootReducers;
