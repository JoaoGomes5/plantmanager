import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button'
import { useState } from 'react';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

export function UserIdentification(){
  const navigation = useNavigation();
  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus() {
      setIsFocused(true)
  }
  function handleInputChange(value: string) {
      setIsFilled(!!value)
      setName(value)
  }

  

  function handleSubmit() {
    if(name) {
      navigation.navigate('Confirmation')
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>

            <View style={styles.form}>

              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {
                    isFilled
                    ? '😃'
                    : '😄'
                  }
                </Text>

                <Text style={styles.title}>
                  How can we {'\n'}
                  call you?
                </Text>
                
              </View>

              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && {borderColor: theme.colors.green}
                ]}
                placeholder="Type your name"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View  style={styles.footer}>
                <Button 
                  text="Confirm"
                  activeOpacity={0.7}
                  onPress={handleSubmit}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}