import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Transaction {
  id: string;
  date: string;
  name: string;
  type: string;
  amount: string;
  status: string;
}

const transactions: Transaction[] = [
  { id: '1', date: '01.09.2023', name: 'Frank Castle', type: 'SWIFT', amount: '-$1,240.00', status: 'Sent' },
  { id: '2', date: '03.07.2023', name: 'Carolyn Zimmerman', type: 'SWIFT', amount: '-€3,120.00', status: 'Sent' },
  { id: '3', date: '01.06.2023', name: 'Selfbank', type: 'LNet', amount: '$240.00', status: 'Received' },
];

const TransactionHistory: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.date}</Text>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 24,
    borderWidth:4,
    borderColor:'red',
    },
});

export default TransactionHistory;
