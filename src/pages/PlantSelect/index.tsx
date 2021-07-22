
import React, { useState } from 'react';
import { useEffect } from 'react';

import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EnviromentButton } from '../../components/EnviromentButton';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import { styles } from './styles';

interface EnviromentProps {
  key: string;
  title: string;
}

export function PlantSelect(){
  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);

  useEffect(() => {
    async function fetchEnviroments() {
      const { data } = await api.get('plants_environments')

      setEnvironments([
        {
          key: 'all',
          title: 'All'
        },
        ...data
      ])
    }

    fetchEnviroments()
  },[])

  return (
    <View>
        <View style={styles.header}>
          <Header />
        

          <Text style={styles.title}>
            In which environment,
          </Text>
          <Text style={styles.subTitle}> 
            do you want to place your plant?
          </Text>
        </View>

        <View>

        <FlatList
          data={environments}
          renderItem={({ item })=> (
            <EnviromentButton 
              title={item.title}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
        </View>
    </View>
  );
}