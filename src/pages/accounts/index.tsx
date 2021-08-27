import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Accounts: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <FontAwesome5 name="wallet" size={70} color="#383644" />
        <View style={styles.headerAccount}>
          <View style={styles.labelsAccount}>
            <Text style={styles.titleAccount}>Account 01</Text>
            <Text style={styles.subTitleAccount}>Savings</Text>
            <View style={styles.balanceContainer}>
              <Text style={styles.labelCurrentBalance}>Saldo atual: </Text>
              <Text style={styles.balance}>R$ 1000.00 </Text>
            </View>
          </View>
          <View style={styles.ellipsisContainer}>
            <FontAwesome5 name="ellipsis-v" size={18} color="#000" />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  account: {
    margin: 5,
    height: 90,
    width: 340,
    padding: 10,
    backgroundColor: '#FFFF',
    elevation: 20,
    flexDirection: 'row'
  },
  headerAccount: {
    flexDirection: 'row'
  },
  labelsAccount: {
    flexDirection: 'column',
    marginLeft: 10
  },
  balanceContainer: {
    display: 'flex',
    height: 27,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  titleAccount: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'flex-end',
  },
  subTitleAccount: {
    color: '#848484',
    justifyContent: 'flex-start'
  },
  labelCurrentBalance: {
    fontWeight: 'bold',
    fontSize: 16
  },
  balance: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#156F00'
  },
  ellipsisContainer: {
    alignItems: 'flex-end',
    width: 60
  }
});

export default Accounts;