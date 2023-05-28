import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SummaryCard from '../components/SummaryCard';
import ListComponent from '../components/ListComponent';
import {summaryList} from '../data/SummaryList';
const Home = () => {
  return (
    <View style={styles.container}>
      <SummaryCard />
      <View style={{flex: 1}}>
        <ListComponent summaryList={summaryList} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
