import api from '../../services/api';
import types from './types';

export const get = () => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('GET_CLASSROOM_PENDING'));
      await api
        .get('/classroom')
        .then(res => {
          resolve();
          dispatch(types('GET_CLASSROOM_FULLFILLED', res.data.data));
        })
        .catch(() => {
          reject();
          dispatch(types('GET_CLASSROOM_REJECTED'));
        });
    });
  };
};
