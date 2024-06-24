import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsBookmarkStarFill,
  BsCashCoin,
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

function Home() {

 

  const data = [
    {
      name: "Bulan ke 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Bulan ke 2",
      uv: 3000,
      pv: 1398,
      amt: 2000,
    },
    {
      name: "Bulan ke 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Bulan ke 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Bulan ke 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Bulan ke 6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Bulan ke 7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h2>DASHBOARD</h2>
      </div>

      {/* DASHBOARD */}
      <div className="container-card">
        <div className="main-title">
          <h3>Perkembangan</h3>
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner order">
              <h3>Pesanan</h3>
              <BsBookmarkStarFill className="card_icon" />
            </div>
            <h4>300 Pesanan</h4>
          </div>
          <div className="card">
            <div className="card-inner income">
              <h3>Pendapatan</h3>
              <BsCashCoin className="card_icon" />
            </div>
            <h4>Rp 3.210.098</h4>
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

      {/* CHAT USER */}
      <div className="container-chat">
        <div className="main-title">
          <h3>Chat User</h3>
        </div>

        <div className="chat-title">
          <h4>Pengguna</h4>
          <h4>Status</h4>
        </div>

        <div className="chat-list">
        <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Bagaskara</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Budi</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Joe</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Riska</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Lisa</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <FaUser className="icon-chat-profile" />
              </div>
              <div className="user-text">
                <h4 className="user-name">Zayn</h4>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h4>Baca</h4>
            </div>
          </div>
        </div>
      </div>

      {/* LAYANAN */}
      <div className="container-service">
        <div className="main-title">
          <h3>Layanan</h3>
        </div>

        <div className="service-list">
          <div className="service-motor">
            <h3>200</h3>
            <span>Motor</span>
          </div>
          <div className="service-mobil">
            <h3>100</h3>
            <span>Mobil</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
