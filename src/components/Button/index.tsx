import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
type ButtonProps = TouchableOpacityProps & {
  text: string
}
export function Button({ text, ...rest  }: ButtonProps){
  return (
    <TouchableOpacity
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.text} >
        {text}
      </Text>

  </TouchableOpacity>
  );
}