import { StyleSheet, Text, View } from 'react-native';
import Greating from './src/components/Greating';

export default function App() {
  const names = ['Cristian', 'Alejandra'];
  return (
    <View style={styles.container}>
      {names.map((name) => {
        return (<Greating name={name}/>)
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
