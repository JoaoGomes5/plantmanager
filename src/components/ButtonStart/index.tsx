
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type ButtonStartProps = RectButtonProps &{
  
}

export function ButtonStart({...rest } : ButtonStartProps){
  return (
    <RectButton
      style={styles.container} 
      {...rest}
    >
     <AntDesign 
        name="arrowright" 
        size={24} 
        color={theme.colors.white}
      />

    </RectButton>
  );
}