import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Bengkel = () => {
  const [bengkelData, setBengkelData] = useState(null);

  useEffect(() => {
    const fetchBengkelData = async () => {
      try {
        const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage
        const response = await axios.get('https://stirred-guided-bullfrog.ngrok-free.app/bengkel', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // For sending credentials (cookies)
        });
        setBengkelData(response.data);
      } catch (error) {
        console.error('Error fetching bengkel data:', error);
      }
    };

    fetchBengkelData();
  }, []);

  return (
    <div className='main-bengkel'>
      <div className='title-bengkel'>
      <h3>Profil Bengkel</h3>
      </div>
      {bengkelData ? (
        <div className='data-bengkel'>
          <h4>Nama Bengkel</h4>
          <p> {bengkelData.nama_bengkel}</p>
          <h4>No. Telepon</h4>
          <p> {bengkelData.no_tlp_bengkel}</p>
          <h4>Alamat</h4>
          <p> {bengkelData.alamat}</p>
          <h4>Deskripsi</h4>
          <p> {bengkelData.deskripsi}</p>
          <h4>Latitude</h4>
          <p> {bengkelData.latitude}</p>
          <h4>Longitude</h4>
          <p> {bengkelData.longtitude}</p>
        </div>
      ) : (
        <p>Loading bengkel data...</p>
      )}
      <div className='btn-bengkel'>
        <Link to='/edit'>
        <button className='btn-edit'>Edit</button></Link>
        <Link to='/dashboard'>
        <button className='btn-back'>Kembali</button></Link>
      </div>
    </div>
  );
};

export default Bengkel;
