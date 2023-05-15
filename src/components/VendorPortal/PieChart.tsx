import "./OrderCard.scss";
import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const data = [
  { name: "Mobile Phones", value: 600 },
  { name: "Tablet", value: 300 },
  { name: "Phone Accessories", value: 400 },
  { name: "Tablet Accessories", value: 200 }
];
const COLORS = ["#DE11FF", "#2BD9C7", "#C0F5EF", "#DBB2FF"];


const VendorPie = () => {
  return (
    <div className="pie-pie">
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
   
    </div>
  );
}

export default VendorPie;