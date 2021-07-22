import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../global/styles/theme';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

const stackRoutes = createStackNavigator();

export function StackRoutes(){
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.white 
        }
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome}/>
      <stackRoutes.Screen name="UserIdentification" component={UserIdentification}/>
      <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
      <stackRoutes.Screen name="PlantSelect" component={PlantSelect}/>

    </stackRoutes.Navigator>
  );
}