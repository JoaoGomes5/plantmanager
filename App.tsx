import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { Routes } from './src/routes/index.routes';



export default function App() {
  const [ isLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })
  if(!isLoaded)
    return <AppLoading />
  
    return (
      <Routes />
    )
}
