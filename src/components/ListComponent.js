import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {getFormattedValue} from '../utils/method';
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = ({name, status, value, negative}) => {
  return (
    <View style={styles.item}>
      <View
        style={[
          styles.container2,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 4.2}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Metropolis-Bold',
              color: '#6771e4',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: 'Metropolis-Regular',
              marginTop: '2.5%',
              color: status === 'Exited' ? '#e7c25b' : '#9a9a9a',
            }}>
            {status}
          </Text>
        </View>
        <View style={{flex: 1.8, paddingTop: '5%'}}>
          <Text
            style={{
              color: negative === true ? 'red' : 'green',
              fontFamily: 'Metropolis-Regular',
              fontSize: 12,
            }}>
            <Icon name="rupee" color="black" />{' '}
            {negative === true
              ? `${getFormattedValue(value)}(-0.10 %)`
              : `${getFormattedValue(value)}(1.00 %)`}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#e7e7e7',
          marginTop: '3.5%',
        }}
      />
    </View>
  );
};

export default function ListComponent({summaryList}) {
  const [finalSummaryList, setFinalSummaryList] = useState(summaryList);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = summaryList.map(item => {
        const newValue = Math.random() * 10000;
        return {...item, value: newValue};
      });
      setFinalSummaryList(newData);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [summaryList]);

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      status={item.status}
      value={item.value}
      negative={item.negative}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={finalSummaryList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  container2: {
    flex: 1,
  },
});
