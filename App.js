import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (!tarefaAtual.trim()) {
      return;
    }

    setListaTarefas([...listaTarefas, tarefaAtual]);
    setTarefaAtual('');
  };

  const salvarTeste = async () => {
    try {
      await AsyncStorage.setItem('chave_secreta', 'Felipe');
      console.log('Teste salvo no cofre!');
    } catch (error) {
      console.error('Falha ao salvar o teste no AsyncStorage.', error);
    }
  };

  const incrementarContador = () => {
    setCount((contadorAtual) => contadorAtual + 1);
    salvarTeste();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.coresContainer}>
        <View style={styles.vermelho} />
        <View style={styles.verde} />
        <View style={styles.azul} />
      </View>

      <Text>Nova Tarefa</Text>
      <Text>{count}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          accessibilityLabel="Nova tarefa"
          style={styles.input}
          placeholder="Digite a anotação..."
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
          returnKeyType="done"
          onSubmitEditing={adicionarTarefa}
        />

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Adicionar tarefa"
          onPress={adicionarTarefa}
          style={styles.botaoContainer}
        >
          <Text style={styles.botao}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Incrementar contador e salvar teste"
          onPress={incrementarContador}
          style={styles.botaoContainer}
        >
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.lista}
        keyboardShouldPersistTaps="handled"
      >
        {listaTarefas.map((tarefa, index) => (
          <View key={index} style={styles.itemLista}>
            <Text>{tarefa}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  coresContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  vermelho: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
  },
  verde: {
    height: 60,
    width: 60,
    backgroundColor: 'green',
  },
  azul: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 4,
  },
  botaoContainer: {
    padding: 8,
  },
  botao: {
    color: 'blue',
    fontWeight: 'bold',
  },
  lista: {
    width: '100%',
    marginTop: 10,
  },
  itemLista: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
