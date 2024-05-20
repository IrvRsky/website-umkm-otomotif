import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsBookmarkStarFill,
  BsCashCoin,
  BsDatabaseFillUp
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Pendapatan() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2000,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-value">
      <div className="main-title">
        <h2>PENDAPATAN</h2>
      </div>

      {/* PENDAPATAN */}
      <div className="container-card">
        <div className="main-title">
          <h3>Saldo Pendapatan</h3>
        </div>

        <div className="main-value-cards">
          <div className="card-value">
            <div className="card-inner-value">
            <BsDatabaseFillUp className="card-value-icon"/>
            <span>Rp 3.210.098</span>
            </div>
          </div>
        </div>
      </div>

      {/* DATA GRAFIK */}
      <div className="container-graph">
        <div className="main-title">
          <h3>Grafik Pendapatan</h3>
        </div>

        <div className="charts">
          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
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
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
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
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LAYANAN */}
      <div className="container-service">
        <div className="main-title">
          <h3>Pendapatan Layanan</h3>
        </div>

        <div className="service-value-list">
          <div className="service-value-motor">
            <div className="value-motor">
            <span>Kendaraan Motor</span>
              <h2>345</h2>
            </div>
            <div className="value-income">
              <span>Naik 1.3%</span>
              <p>Selama seminggu</p>
            </div>
          </div>
          <div className="service-value-mobil">
            <div className="value-mobil">
            <span>Kendaraan Mobil</span>
              <h2>120</h2>
            </div>
            <div className="value-income">
              <span>Naik 1.3%</span>
              <p>Selama seminggu</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pendapatan;
