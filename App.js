import { StyleSheet, Text, View } from 'react-native';
import Greating from './src/components/Greating';

export default function App() {
  const names = [{firstName: 'Cristian', lastName: 'Franco'}, { firstName: 'Alejandra', lastName: 'Bertón'}, { firstName: 'Alejandro'}];
  return (
    <View style={styles.container}>
      {names.map((person) => {
        return (<Greating firstName={person.firstName} lastName={person.lastName}/>)
      })}
    </View>
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
