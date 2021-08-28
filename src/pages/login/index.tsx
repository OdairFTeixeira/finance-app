import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage,  } from 'react-native';

import InputText from '../../components/forms/InputText';
import Button from '../../components/forms/button';
import api from '../../services/api';

const Login: React.FC<any> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Menu');
      }
    });
  }, []);

  const handleLogin = async () => {
    const response = await api.post('/user/authenticate', {
      email,
      password
    }).catch(error => {
      if (error) {
        alert('Usuário não encontrado!');
      }
    });

    if (response) {
      await AsyncStorage.setItem('user', response.data.jwt);
      navigation.navigate('Menu')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Text style={styles.question}>?</Text>
      </View>
      <View style={styles.inputsContainer}>
        <InputText 
          icon="envelope" 
          placeholder="E-mail" 
          autoCapitalize="none"
          autoCorrect={false} 
          keyboardType="email-address" 
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
        <Button title="Logar" onPress={handleLogin} />
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