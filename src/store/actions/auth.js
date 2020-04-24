import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import getHeaders from './headers';
import types from './types';

export const login = form => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('LOADING'));
      await api
        .post('/auth/login', form)
        .then(res => {
          dispatch(types('SET_TOKEN', res.data.access_token));
          dispatch(types('LOGIN_FULFILLED', res.data.data));
          resolve();
        })
        .catch(() => {
          reject();
          dispatch(types('LOGIN_REJECTED'));
        });
    });
  };
};

export const logOut = () => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      await AsyncStorage.removeItem('root')
        .then(() => {
          dispatch({ type: 'LOGOUT' });
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  };
};

export const setPinUser = pin => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PIN', payload: pin });
  };
};

export const getMe = () => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('LOADING'));
      await api
        .get('/auth/getMe', { headers: getHeaders(getState().auth.token) })
        .then(res => {
          resolve();
          dispatch(types('GET_ME_FULFILLED', res.data.data));
        })
        .catch(err => {
          console.log(err);
          reject(err);
          dispatch(types('LOADING_FALSE'));
        });
    });
  };
};

export const updateUser = data => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('LOADING'));
      await api
        .patch('/auth/updateUser', data, {
          headers: getHeaders(getState().auth.token, 'multipart/form-data'),
        })
        .then(() => {
          resolve();
          dispatch(types('UPDATE_USER_FULFILLED'));
        })
        .catch(() => {
          reject();
          dispatch(types('LOADING_FALSE'));
        });
    });
  };
};
