import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';
import me from '../../assets/me.png'

export function Header(){
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.gretting}>Hello,</Text>
        <Text style={styles.userName}>Joao</Text>
      </View>


      <Image 
          source={me}
          resizeMode="contain"
          style={styles.avatar}
          />
    </View>
  );
}