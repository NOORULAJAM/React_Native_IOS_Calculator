import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const Button = ({text, color, textColor, width}) => {
  console.log(color);
  // set dimmenstion
  const screen = Dimensions.get('window');
  const buttonWidth = screen.width / 4;
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: Math.floor(screen.width / 4 - 10),
        backgroundColor: color,
        width: width ? width : Dimensions.get('screen').width * 0.22,
        margin: 5,
        borderRadius: 45,
      }}>
      <Text
        style={{
          color: textColor ? textColor : 'black',
          fontSize: 40,
          fontWeight: '400',
        }}>
        {' '}
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
