import api from '../../services/api';
import types from './types';

export const get = () => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('GET_HOSTEL_PENDING'));
      await api
        .get('/hostel')
        .then(res => {
          resolve();
          dispatch(types('GET_HOSTEL_FULLFILLED', res.data.data));
        })
        .catch(() => {
          reject();
          dispatch(types('GET_HOSTEL_REJECTED'));
        });
    });
  };
};
