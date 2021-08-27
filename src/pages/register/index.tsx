import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import InputText from '../../components/forms/InputText';
import Button from '../../components/forms/button';
import api from '../../services/api';

const Register: React.FC<any> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await api.post('/user', {
      email,
      password,
      name,
      lastname
    });

    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.photoContainer}>
        <Text style={styles.question}>?</Text>
      </View>
      <View style={styles.inputsContainer}>
        <InputText placeholder="Nome"
          autoCorrect={false}
          value={name}
          onChangeText={setName} />
        <InputText
          placeholder="Sobrenome"
          autoCorrect={false}
          value={lastname}
          onChangeText={setLastname}
        />
        <InputText
          icon="envelope"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail} />
        <InputText
          icon="lock"
          placeholder="Senha"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword} />
      </View>
      <View style={styles.buttonConteiner}>
        <Button onPress={handleSubmit} title="Cadastrar-se" />
      </View>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  buttonConteiner: {
    width: 300,
  },
  inputsContainer: {
    width: 300,
    paddingBottom: 20
  },
  photoContainer: {
    borderWidth: 1,
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 150,
    color: '#7C7C7C'
  },
});

export default Register;