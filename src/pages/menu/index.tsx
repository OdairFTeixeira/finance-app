import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Menu: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Accounts') }}>
          <FontAwesome5 name="wallet" size={70} color="#383644" />
          <Text>Contas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="exchange-alt" size={70} color="#383644" />
          <Text>Transações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="tags" size={70} color="#383644" />
          <Text>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="chart-line" size={70} color="#383644" />
          <Text>Estatísticas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuItem: {
    margin: 5,
    height: 160,
    width: 160,
    backgroundColor: '#FFFF',
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Menu;