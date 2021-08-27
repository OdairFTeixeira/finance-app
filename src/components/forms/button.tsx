import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} {...rest}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383644',
    height: 50
  },
  textButton: {
    color: '#fff'
  }
});


export default Button;