import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (!tarefaAtual.trim()) {
      return;
    }

    setListaTarefas([...listaTarefas, tarefaAtual]);
    setTarefaAtual('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Checklist</Text>
        <Text style={styles.subtitle}>Registre as peças que precisam de atenção.</Text>

        <View style={styles.form}>
          <TextInput
            accessibilityLabel="Nova tarefa"
            style={styles.input}
            placeholder="Ex.: Sensor Queimado"
            value={tarefaAtual}
            onChangeText={setTarefaAtual}
            returnKeyType="done"
            onSubmitEditing={adicionarTarefa}
          />
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Adicionar tarefa"
            onPress={adicionarTarefa}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taskList}>
          {listaTarefas.map((tarefa, index) => (
            <View key={index} style={styles.taskCard}>
              <Text style={styles.taskText}>{tarefa}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32,
  },
  title: {
    color: '#1f2937',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219653',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '600',
  },
  taskList: {
    gap: 12,
    marginTop: 24,
  },
  taskCard: {
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  taskText: {
    color: '#1f2937',
    fontSize: 16,
  },
});
