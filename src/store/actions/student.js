import api from '../../services/api';
import types from './types';

export const getSummary = () => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('GET_SUMMARY_PENDING'));
      await api
        .get('/student/summary')
        .then(res => {
          resolve();
          dispatch(types('GET_SUMMARY_FULLFILLED', res.data.data));
        })
        .catch(() => {
          reject();
          dispatch(types('GET_SUMMARY_REJECTED'));
        });
    });
  };
};
