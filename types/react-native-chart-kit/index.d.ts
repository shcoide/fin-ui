declare module 'react-native-chart-kit' {
  import { Component } from 'react';
  import { ViewStyle, TextStyle, StyleProp } from 'react-native';

  export interface ChartConfig {
    backgroundGradientFrom?: string;
    backgroundGradientFromOpacity?: number;
    backgroundGradientTo?: string;
    backgroundGradientToOpacity?: number;
    color?: (opacity: number) => string;
    strokeWidth?: number;
    barPercentage?: number;
    useShadowColorFromDataset?: boolean;
    propsForDots?: object;
  }

  export interface Dataset {
    data: number[];
    color?: (opacity: number) => string;
    strokeWidth?: number;
  }

  export interface LineChartProps {
    data: {
      labels: string[];
      datasets: Dataset[];
    };
    width: number;
    height: number;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    yAxisInterval?: number;
    chartConfig: ChartConfig;
    bezier?: boolean;
    style?: StyleProp<ViewStyle>;
  }

  export class LineChart extends Component<LineChartProps> {}

  export interface BarChartProps {
    data: {
      labels: string[];
      datasets: Dataset[];
    };
    width: number;
    height: number;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    yAxisInterval?: number;
    chartConfig: ChartConfig;
    style?: StyleProp<ViewStyle>;
  }

  export class BarChart extends Component<BarChartProps> {}

  export interface PieChartProps {
    data: {
      name: string;
      population: number;
      color: string;
      legendFontColor?: string;
      legendFontSize?: number;
    }[];
    width: number;
    height: number;
    chartConfig: ChartConfig;
    accessor: string;
    backgroundColor?: string;
    paddingLeft?: string;
    absolute?: boolean;
    style?: StyleProp<ViewStyle>;
  }

  export class PieChart extends Component<PieChartProps> {}

  export interface ProgressChartProps {
    data: number[];
    width: number;
    height: number;
    strokeWidth: number;
    radius: number;
    chartConfig: ChartConfig;
    hideLegend?: boolean;
    style?: StyleProp<ViewStyle>;
  }

  export class ProgressChart extends Component<ProgressChartProps> {}

  export interface StackedBarChartProps {
    data: {
      labels: string[];
      datasets: {
        data: number[];
        colors: string[];
      }[];
    };
    width: number;
    height: number;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    yAxisInterval?: number;
    chartConfig: ChartConfig;
    style?: StyleProp<ViewStyle>;
  }

  export class StackedBarChart extends Component<StackedBarChartProps> {}

  export interface ContributionGraphProps {
    values: {
      date: string;
      count: number;
    }[];
    endDate: Date;
    numDays: number;
    width: number;
    height: number;
    chartConfig: ChartConfig;
    style?: StyleProp<ViewStyle>;
  }

  export class ContributionGraph extends Component<ContributionGraphProps> {}

  export class AbstractChart extends Component<ChartConfig> {}
}
