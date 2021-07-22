import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Button } from '../../components/Button'

export function Confirmation(){
  const navigation = useNavigation();

  function handleMoveOn () {
    navigation.navigate('PlantSelect')
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>

          <View style={styles.form}>

            <View style={styles.header}>
              <Text style={styles.emoji}>
                😁
              </Text>

              <Text style={styles.title}>
                You are ready
              </Text>

              <Text style={styles.subTitle}>
                Now let's start taking care of your little 
                plants very carefully
              </Text>
            </View>

            <View  style={styles.footer}>
              <Button 
                text="Start"
                activeOpacity={0.7}
                onPress={handleMoveOn}
              />
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}