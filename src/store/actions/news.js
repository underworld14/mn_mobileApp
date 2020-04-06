import api from '../../services/api';

const types = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const get = () => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('GET_NEWS_PENDING'));
      await api
        .get('/announcement')
        .then(res => {
          resolve();
          dispatch(types('GET_NEWS_FULLFILLED', res.data.data));
        })
        .catch(() => {
          reject();
          dispatch(types('GET_NEWS_REJECTED'));
        });
    });
  };
};
