import React from 'react'
import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  const names = [{firstName: 'Alejandra', lastName: 'Franco'}, { firstName: 'Alejandra', lastName: 'Bertón'}, { firstName: 'Alejandro'}];
  return (
    <NavigationContainer>
      <NavigationStack/>
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
