import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import Header from '../../components/Header';
import WalletSummary from '../../components/home/WalletSummary';
import TransactionHistory from '../../components/home/TransactionHistory';
import IncomeExpensesChart from '../../components/home/IncomeExpensesChart';
import transactions  from '../../data/transaction.json';
const Home: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Header />
            <View style={styles.content}>
              <WalletSummary />
              <IncomeExpensesChart />
              <Text style={styles.title}>Transaction History</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.date}</Text>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container2: {
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
  content: {
    padding: 20,
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
    borderBottomWidth: 2,
    width: '90%',
    marginHorizontal:'auto',
    fontSize:15
  },
});

export default Home;
