import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import types from './types';

export const login = form => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      dispatch(types('LOGIN_PENDING'));
      await api
        .post('/auth/login', form)
        .then(res => {
          resolve();
          dispatch(types('LOGIN_FULFILLED', res.data.data));
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
      await AsyncStorage.clear()
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
