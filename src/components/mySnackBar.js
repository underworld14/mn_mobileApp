import React from 'react';
import { Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';

import color from '../theme/color';

function MySnackBar({ type, visible, onDismiss, message }) {
  return (
    <>
      <Snackbar
        style={{ backgroundColor: color[type ? type : 'primary'] }}
        visible={visible}
        duration={4000}
        onDismiss={onDismiss}>
        {message}
      </Snackbar>
    </>
  );
}

MySnackBar.propTypes = {
  type: PropTypes.oneOf(['primary', 'warning', 'info', 'danger']),
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default MySnackBar;
