import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // Import other chart types as needed (BarChart, PieChart, etc.)
} from 'recharts';

// Define a generic data structure (example)
interface ChartDataPoint {
  name: string;
  value: number;
  // Add other potential data keys
  [key: string]: any;
}

// Define props for a generic Chart component
interface ChartProps {
  data: ChartDataPoint[];
  // Add props to customize chart type, colors, axes, etc.
  // For simplicity, this example focuses on a LineChart
  className?: string;
}

// Basic Chart component using Recharts (Example with LineChart)
const Chart: React.FC<ChartProps> = ({ data, className }) => {
  // Basic validation or placeholder if no data
  if (!data || data.length === 0) {
    return <div className={`text-center text-muted-foreground ${className}`}>No data available for chart.</div>;
  }

  return (
    <div className={`w-full h-72 ${className}`}> {/* Default height, can be customized via className */}
      <ResponsiveContainer width="100%" height="100%">
        {/* Example: LineChart. Logic can be added to render different chart types based on props */}
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Example Line. Multiple lines or bars can be added dynamically */}
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.displayName = 'Chart';

export { Chart };
export type { ChartDataPoint }; // Export type for usage

