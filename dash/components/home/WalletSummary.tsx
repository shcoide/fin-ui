import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import CircularChart from './circularchart';

const WalletSummary = () => {
  return (
    <View style={styles.container}>
      <CircularChart />
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text>**** 3456 (USD)</Text>
          <Text style={styles.amount}>$15,744.00</Text>
          <ProgressBar progress={0.3} color="#3b5998" style={styles.progressBar} />
        </View>
        <View style={styles.detailItem}>
          <Text>**** 6238 (EUR)</Text>
          <Text style={styles.amount}>$12,800.00</Text>
          <ProgressBar progress={0.17} color="#3b5998" style={styles.progressBar} />
        </View>
        <View style={styles.detailItem}>
          <Text>**** 5560 (GBP)</Text>
          <Text style={styles.amount}>$23,020.00</Text>
          <ProgressBar progress={0.43} color="#3b5998" style={styles.progressBar} />
        </View>
      </View>
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
  detailsContainer: {
    marginTop: 20,
  },
  detailItem: {
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default WalletSummary;
