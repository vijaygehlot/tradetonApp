import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Select} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const SummaryCard = () => {
  const [service, setService] = React.useState('Expiry');
  const [pnlVal, setPnlVal] = useState(43.66);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.random() * 100;
      setPnlVal(newRandomNumber);
    }, 500);

    return () => clearInterval(interval);
  }, [pnlVal]);

  return (
    <View style={styles.mainCardView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={{flex: 3}}>
            <View style={styles.container3}>
              <View style={{flex: 2}}>
                <Text style={styles.summaryText}>Summary</Text>
              </View>

              <View style={{flex: 2}}>
                <Select
                  dropdownIcon={
                    <AntDesignIcon
                      name="down"
                      color="white"
                      size={20}
                      style={{paddingRight: '10%', fontWeight: 100}}
                    />
                  }
                  color={'white'}
                  selectedValue={service}
                  minWidth="100"
                  accessibilityLabel="Choose Service"
                  placeholder="Choose Service"
                  mt={1}
                  onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="Expiry" value="Expiry" />
                </Select>
              </View>
            </View>
          </View>
          <View style={{flex: 3}}>
            <View style={styles.container2}>
              <View style={styles.mainConatiner}>
                <Text style={styles.mainText}>Capital:</Text>
                <Text style={styles.valueText}>
                  {' '}
                  <Icon name="rupee" color="white" /> 5.15 Cr
                </Text>
              </View>
              <View style={styles.mainConatiner}>
                <Text style={styles.mainText}>P&L:</Text>
                <Text style={styles.valueText}>
                  <Icon name="rupee" color="white" /> -{pnlVal.toFixed(2)} k
                  (-0.009%)
                </Text>
              </View>
              <View style={styles.mainConatiner}>
                <Text style={styles.mainText}>Value:</Text>
                <Text style={styles.valueText}>
                  <Icon name="rupee" color="white" /> {pnlVal.toFixed(2)} L (
                  {Math.floor(pnlVal)})
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  mainCardView: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6771e4',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',

    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  container3: {
    flex: 1,
    padding: '3%',
    flexDirection: 'row',
  },

  mainText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Metropolis-Bold',
  },
  valueText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Metropolis-Regular',
  },
  summaryText: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    padding: '5%',
  },
  mainConatiner: {
    flex: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
