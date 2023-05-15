import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 100,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 100,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 100,
  },
  {
    name: "APRIL",
    uv: 2780,
    pv: 3908,
    amt: 100,
  },
  {
    name: "MAY",
    uv: 1890,
    pv: 4800,
    amt: 100,
  },
  {
    name: "JUNE",
    uv: 2390,
    pv: 3800,
    amt: 100,
  },
  {
    name: "JULY",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "JULY",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "AUG",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "SEP",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "OCT",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "NOV",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
  {
    name: "DEC",
    uv: 3490,
    pv: 4300,
    amt: 100,
  },
];

const VendorBarChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="pv" stackId="a" fill="#2bd9c7" />
        <Bar dataKey="amt" stackId="a" fill="white" />
        <Bar dataKey="uv" stackId="a" fill="#e5e5ef" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VendorBarChart;
