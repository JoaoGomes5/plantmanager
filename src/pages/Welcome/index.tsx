import React from 'react';
import { 
  SafeAreaView , 
  Text, 
  Image, 
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from  './styles';
import watering from '../../assets/watering.png';
import { ButtonStart } from '../../components/ButtonStart';
import { useNavigation } from '@react-navigation/native';


export function Welcome(){
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.wrapper}>

        <Text style={styles.title}> 
        Manage {'\n'}
        your plants of {'\n'}
        easy way
        </Text>

        <Image 
          source={watering}
          resizeMode="contain"
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
          <ButtonStart 
            onPress={handleStart}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}