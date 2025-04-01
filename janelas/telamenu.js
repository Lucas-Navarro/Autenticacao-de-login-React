import { StyleSheet, Text, View } from 'react-native';

export default function TelaMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});