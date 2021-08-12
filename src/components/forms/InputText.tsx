import React from 'react';
import { StyleSheet, TextInputProps, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  icon?: any,
}

const InputText: React.FC<InputProps> = ({ icon, ...rest }) => {
  return(
    <>
      <View style={styles.inputContainer}>
        { icon && <FontAwesome style={styles.icon} name={icon} size={20} />}
        <TextInput style={styles.input} {...rest}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    height: 50,
  },
  icon: {
    paddingRight: 10,
    color: '#7C7C7C'
  }
});


export default InputText;