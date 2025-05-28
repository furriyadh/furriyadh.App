// src/pages/ComponentTestPage.tsx
import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '../components/ui/Table';
import { Chart, ChartDataPoint } from '../components/ui/Chart';

// Sample data for the chart
const sampleChartData: ChartDataPoint[] = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const ComponentTestPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Component Testing Page</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Card</h2>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Test Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is the main content area of the card component. It can contain any elements.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Input</h2>
        <Input type="text" placeholder="Enter some text..." className="max-w-sm" />
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Table</h2>
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Chart (Line Example)</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sample Line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart data={sampleChartData} />
          </CardContent>
        </Card>
      </section>

    </div>
  );
};

export default ComponentTestPage;

