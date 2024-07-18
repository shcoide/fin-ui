import React from 'react';
import { Svg, Path, Line, Text } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

interface LineChartProps {
  data: {
    x: number[];
    y: number[];
  };
}

interface Point {
  x: number;
  y: number;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const createPath = (): string => {
    const { width, height } = styles.chart;
    const xMax = Math.max(...data.x);
    const yMax = Math.max(...data.y);
    
    const points: Point[] = data.x.map((x, i) => ({
      x: (x / xMax) * width,
      y: height - (data.y[i] / yMax) * height
    }));

    const d = points.reduce((acc, point, i, arr) => {
      if (i === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const prevPoint = arr[i - 1];
      const midPoint = {
        x: (prevPoint.x + point.x) / 2,
        y: (prevPoint.y + point.y) / 2
      };

      return `${acc} Q ${prevPoint.x} ${prevPoint.y}, ${midPoint.x} ${midPoint.y}`;
    }, '');

    return d;
  };

  const path = createPath();
  const xMax = Math.max(...data.x);
  const yMax = Math.max(...data.y);

  return (
    <View style={styles.border}>
      <Svg viewBox="0 0 300 300" style={styles.chart}>
        {/* Axes */}
        <Line x1="0" y1="0" x2="0" y2="300" stroke="black" strokeWidth="2" />
        <Line x1="0" y1="300" x2="300" y2="300" stroke="black" strokeWidth="2" />

        {/* X Axis Labels */}
        {Array.from({ length: 11 }, (_, i) => (
          <Text
            key={`x-${i}`}
            x={(i * 300) / 10}
            y="315"
            fontSize="12"
            fill="black"
            textAnchor="middle"
          >
            {(i * xMax) / 10}
          </Text>
        ))}

        {/* Y Axis Labels */}
        {Array.from({ length: 11 }, (_, i) => (
          <Text
            key={`y-${i}`}
            x="-15"
            y={300 - (i * 300) / 10}
            fontSize="12"
            fill="black"
            textAnchor="end"
          >
            {(i * yMax) / 10}
          </Text>
        ))}

        {/* Line Path */}
        <Path d={path} stroke="blue" fill="none" strokeWidth="2" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    // borderWidth: 2,
    borderColor: 'red',
    margin: 5,
    width: 320,
    height: 320,
  },
  chart: {
    width: 300,
    height: 300,
  },
});

export default LineChart;
