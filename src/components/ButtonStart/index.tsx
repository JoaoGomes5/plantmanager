
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

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
     <Feather 
        name="chevron-right" 
        size={32} 
        color={theme.colors.white}
      />

    </RectButton>
  );
}