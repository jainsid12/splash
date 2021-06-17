import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

function* yLabel() {
  yield* [0, 1, 2, 3, 4, 5];
}

const Highlights = () => {
  const week = (
    <View style={styles.week}>
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
        <View style={styles.dayContainer}>
          <Text style={styles.day}>{day}</Text>
        </View>
      ))}
    </View>
  );

  const border = <Text style={styles.border}></Text>;

  const yLabelIterator = yLabel();
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    propsForBackgroundLines: {strokeDasharray: ''},
  };

  const data = {
    labels: ['', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        data: [0],
      },
    ],
    strokeWidth: 1,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* card 1 */}
        <Text style={styles.head}>Highlights</Text>
        <View style={styles.card}>
          <Text style={{textAlign: 'center', fontSize: 16, paddingBottom: 14}}>
            Current focused streak
          </Text>
          <View style={styles.trip}>
            <View style={styles.count}>
              <Text style={{fontSize: 38, fontWeight: 'bold', marginTop: 22}}>
                0
              </Text>
              <Text
                style={{
                  position: 'relative',
                  fontSize: 16,
                  color: 'rgb(195,195,195)',
                  bottom: 10,
                }}>
                trips
              </Text>
              <Image style={styles.car} source={require('../assets/car.png')} />
            </View>
            <View style={styles.countSuggestion}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: 'rgb(195,195,195)',
                  padding: 6,
                }}>
                6 trips best
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.stuff}>
              Trips added to your streaks this week
            </Text>
          </View>
          {week}
          <Text style={styles.border}></Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>Total focused trips</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 24, fontWeight: '700'}}>24 </Text>
              <Text style={{color: 'rgb(195,195,195)'}}>trips</Text>
            </View>
          </View>
        </View>
        {/* card 2 */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.head}>Phone Distraction</Text>
          <Image
            source={require('../assets/info.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <View style={styles.card}>
          {/*  */}
          <Text style={{fontSize: 16, fontWeight: '700'}}>Total Duration</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 16,
            }}>
            <Text style={{color: 'rgb(185,185,185)', fontSize: 16}}>
              Previous Week
            </Text>
            <Text style={{fontSize: 16}}>Current Week</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 14,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/previous.png')}
                style={{height: 16, width: 16, marginRight: 8}}
              />
              <Text style={{color: 'rgb(185,185,185)'}}>31-06 Jun</Text>
              <Image
                source={require('../assets/next_disable.png')}
                style={{height: 16, width: 16, marginLeft: 8}}
              />
            </View>
            <Text style={{color: 'rgb(185,185,185)'}}>07-13 Jun</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 14,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '700',
                  color: 'rgb(165,165,165)',
                }}>
                3.72{' '}
              </Text>
              <Text style={styles.lightText}>min</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  color: 'rgb(165,165,165)',
                }}>
                - -{' '}
              </Text>
              <Text style={styles.lightText}>min</Text>
            </View>
          </View>
          {/*  */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              source={require('../assets/path_down.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                color: 'rgb(80,210,78)',
                fontWeight: '700',
                fontSize: 15,
              }}>
              {'  '}
              Down from previous week.
            </Text>
          </View>
          {/* graph */}
          <View style={styles.graph}>
            <LineChart
              data={data}
              width={350}
              height={200}
              chartConfig={chartConfig}
              yAxisSuffix=" m"
              formatYLabel={() => yLabelIterator.next().value}
              segments={5}
              right="ena"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 30,
  },
  head: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 14,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 14,
  },
  trip: {
    alignItems: 'center',
    height: 100,
  },
  count: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'rgb(238,67,48)',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  car: {
    height: 25,
    width: 25,
  },
  countSuggestion: {
    position: 'relative',
    bottom: 78,
    left: 87,
    width: 80,
    borderColor: 'rgb(195,195,195)',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
  },
  stuff: {
    backgroundColor: 'rgb(254, 242, 246)',
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgb(238,168,160)',
    color: 'rgb(255,130,120)',
    marginVertical: 16,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dayContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 2,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  day: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(175,175,175)',
  },
  border: {
    height: 2,
    backgroundColor: 'rgb(235,235,235)',
    marginVertical: 18,
  },
  lightText: {
    color: 'rgb(185,185,185)',
    fontSize: 16,
    fontWeight: '700',
  },
  graph: {
    marginVertical: 14,
    right: 26,
  },
});

export default Highlights;
