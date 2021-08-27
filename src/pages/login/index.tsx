import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import InputText from '../../components/forms/InputText';
import Button from '../../components/forms/button';

const Login: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Text style={styles.question}>?</Text>
      </View>
      <View style={styles.inputsContainer}>
        <InputText icon="envelope" placeholder="E-mail" autoCorrect={false} />
        <InputText icon="lock" placeholder="Senha" autoCorrect={false} />
      </View>
      <View style={styles.buttonConteiner}>
        <Button title="Logar" onPress={() => { navigation.navigate('Menu') }} />
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.labelColor}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
          <Text style={styles.createAccount}> Crie uma.</Text>
        </TouchableOpacity>
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
  inputsContainer: {
    width: 300,
    paddingBottom: 20
  },
  buttonConteiner: {
    width: 300,
  },
  photoContainer: {
    borderWidth: 1,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 150,
    color: '#7C7C7C'
  },
  labelColor: {
    color: '#7C7C7C'
  },
  createAccountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  createAccount: {
    color: '#00A3FF',
    textDecorationLine: 'underline',
  }
});

export default Login;