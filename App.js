

import { StyleSheet, Text, TextInput, View } from 'react-native';
import Title from './src/Components/Title';
import Main from './src/Main';

export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
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
