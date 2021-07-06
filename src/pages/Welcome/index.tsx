import React from 'react';
import { SafeAreaView , Text, Image, TouchableOpacity} from 'react-native';

import { styles } from  './styles';
import watering from '../../assets/watering.png';
import { ButtonStart } from '../../components/ButtonStart';


export function Welcome(){
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}> 
      Manage {'\n'}
      your plants of {'\n'}
      easy way
      </Text>

      <Image 
        source={watering}
        style={styles.image}
      />

      <Text style={styles.subTitle}>
      Don't forget to water your plants anymore. 
      We take care to remember youwhenever you need.    
      </Text>

      <TouchableOpacity 
       style={styles.button}
       activeOpacity={0.7}
      >
        <ButtonStart />
      </TouchableOpacity>
    </SafeAreaView>
  );
}