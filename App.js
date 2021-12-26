import React from 'react'
import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import Greating from './src/components/Greating';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const names = [{firstName: 'Alejandra', lastName: 'Franco'}, { firstName: 'Alejandra', lastName: 'Bertón'}, { firstName: 'Alejandro'}];
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {names.map((person) => {
          return (<Greating firstName={person.firstName} lastName={person.lastName} key={Math.random()}/>)
        })}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
