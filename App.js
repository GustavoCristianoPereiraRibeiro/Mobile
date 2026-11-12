import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const salvarTeste = async () => {
    try {
      await AsyncStorage.setItem('chave_secreta', 'Felipe');
      console.log('Teste salvo no cofre!');
    } catch (error) {
      console.error('Não foi possível salvar o teste:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>tarefas</Text>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Salvar teste no AsyncStorage"
        onPress={salvarTeste}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219653',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 36,
  },
});
