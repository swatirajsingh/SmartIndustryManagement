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


function EnergyChart() {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("https://smartindustrymanagement.onrender.com/api/dashboard")
      .then((res) => {

        const energyData = res.data.data.energy.map(
          (value, index) => ({
            time: `${10 + index} AM`,
            energy: value,
          })
        );

        setData(energyData);

      })
      .catch((err) => {
        console.error(err);
      });

  }, []);


  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-semibold mb-4">
        ⚡ Energy Consumption
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />


          <Line
            type="monotone"
            dataKey="energy"
            stroke="#16a34a"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}


export default EnergyChart;