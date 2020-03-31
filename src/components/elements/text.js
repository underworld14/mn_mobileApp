import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { fs } from '../responsive';

function Typography({ type, children, style, size, color }) {
  const textStyles = [
    !type && styles.regular,
    type === 'regular' && styles.regular,
    type === 'thin' && styles.thin,
    type === 'semibold' && styles.semibold,
    type === 'bold' && styles.bold,
  ];

  const textSize = {
    fontSize: size ? fs(size) : fs(9),
  };

  const textColor = {
    color,
  };

  return (
    <>
      <Text style={[textStyles, textSize, textColor, style]}>{children}</Text>
    </>
  );
}

Typography.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['thin', 'regular', 'semibold', 'bold']),
  style: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  thin: {
    fontFamily: 'Poppins-Light',
  },
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Typography;
