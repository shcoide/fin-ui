import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;

type DataPoint = {
  value: number;
  labelComponent?: () => JSX.Element;
  customDataPoint?: () => JSX.Element;
  hideDataPoint?: boolean;
};

const lcomp = (label: string) => <Text style={{ color: 'lightgray' }}>{label}</Text>;

const initialData: DataPoint[] = [
  { value: 100, labelComponent: () => lcomp('22 Nov') },
  { value: 120, hideDataPoint: true },
  { value: 210 },
  { value: 250, hideDataPoint: true },
  { value: 320, labelComponent: () => lcomp('24 Nov') },
  { value: 310, hideDataPoint: true },
  { value: 270 },
  { value: 240, hideDataPoint: true },
  { value: 130, labelComponent: () => lcomp('26 Nov') },
  { value: 120, hideDataPoint: true },
];

const IncomeExpensesChart: React.FC = () => {
  const [currentData, setCurrentData] = useState<DataPoint[]>(initialData);

  const updateValue = (index: number, newValue: number) => {
    const newData = [...currentData];
    newData[index].value = newValue;
    setCurrentData(newData);
  };

  const dPoint = (index: number) => {
    const translateY = useSharedValue(0);

    const gesture = Gesture.Pan()
      .onUpdate((e) => {
        translateY.value = e.translationY;
        const newValue = Math.max(0, 0 - e.translationY * 0); // Adjust the multiplier as needed
        updateValue(index, newValue);
      })
      .onEnd(() => {
        translateY.value = withTiming(0);
      });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              width: 14,
              height: 14,
              backgroundColor: 'white',
              borderWidth: 3,
              borderRadius: 7,
              borderColor: '#07BAD1',
            },
            animatedStyle,
          ]}
        />
      </GestureDetector>
    );
  };

  return (
      <View style={styles.chartContainer}>
        <LineChart
          isAnimated
          thickness={2}
          color="#07BAD1"
          maxValue={500}
          noOfSections={5}
          animateOnDataChange
          animationDuration={5000}
          onDataChangeAnimationDuration={500}
          areaChart
          yAxisTextStyle={{ color: 'lightgray' }}
          data={currentData.map((dataPoint, index) => ({
            ...dataPoint,
            customDataPoint: () => dPoint(index),
          }))}
          hideDataPoints
          startFillColor={'rgb(84,219,234)'}
          endFillColor={'rgb(84,219,234)'}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={screenWidth / currentData.length}
          backgroundColor="#414141"
          rulesColor="gray"
          rulesType="solid"
          initialSpacing={10}
          yAxisColor="lightgray"
          xAxisColor="lightgray"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#414141',
  },
  chartContainer: {
    marginVertical: 20,
    paddingVertical: 20,
    backgroundColor: '#414141',
  },
});

export default IncomeExpensesChart;
