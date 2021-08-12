import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InputText from '../../components/forms/InputText';
import Button from '../../components/forms/button';

const Register: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.photoContainer}>
          <Text style={styles.question}>?</Text>
        </View>
        <View style={styles.inputsContainer}>
          <InputText placeholder="Nome" autoCorrect={false} />
          <InputText placeholder="Sobrenome" autoCorrect={false} />
          <InputText icon="envelope" placeholder="E-mail" autoCorrect={false} />
          <InputText icon="lock" placeholder="Senha" autoCorrect={false} />
        </View>
        <View style={styles.buttonConteiner}>
          <Button title="Cadastrar-se" />
        </View>
    </View>
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