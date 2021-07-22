import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { RectButton ,RectButtonProps} from 'react-native-gesture-handler'
import { styles } from './styles';


interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  isActive?: boolean;
}

export function EnviromentButton( { title, isActive=false, ...rest} : EnviromentButtonProps){
  return (
    <RectButton
      style={[
        styles.container, 
        isActive && styles.containerActive
      ]}
      {...rest}
    >
      <Text 
       style={[
        styles.text, 
        isActive && styles.textActive
      ]}
      >
        {title}
      </Text>
    </RectButton>
  );
}