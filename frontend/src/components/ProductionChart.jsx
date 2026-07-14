import { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function ProductionChart() {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("https://smartindustrymanagement.onrender.com/api/dashboard")
      .then((res) => {

        const productionData = res.data.data.production.map(
          (value, index) => ({
            time: `${10 + index} AM`,
            production: value,
          })
        );

        setData(productionData);

      })
      .catch((err) => {
        console.error(err);
      });

  }, []);


  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-semibold mb-4">
        📈 Production Trend
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />


          <Line
            type="monotone"
            dataKey="production"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}


export default ProductionChart;