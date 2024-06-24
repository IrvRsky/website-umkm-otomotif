import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const EditProfile = () => {
  const [msg, setMsg] = useState('');
  const [namaBengkel, setNamaBengkel] = useState('');
  const [noTlpBengkel, setNoTlpBengkel] = useState('');
  const [alamat, setAlamat] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [gambarBengkel, setGambarBengkel] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBengkelData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get('https://stirred-guided-bullfrog.ngrok-free.app/bengkel', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        const data = response.data;
        setNamaBengkel(data.nama_bengkel);
        setNoTlpBengkel(data.no_tlp_bengkel.toString());
        setAlamat(data.alamat);
        setDeskripsi(data.deskripsi);
        setLatitude(data.latitude.toString());
        setLongitude(data.longtitude.toString());
        setGambarBengkel(data.gambar_bengkel);
      } catch (error) {
        console.error('Error fetching bengkel data:', error);
      }
    };

    fetchBengkelData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.post('https://stirred-guided-bullfrog.ngrok-free.app/bengkel/add', {
        nama_bengkel: namaBengkel,
        no_tlp_bengkel: noTlpBengkel,
        alamat: alamat,
        deskripsi: deskripsi,
        latitude: latitude,
        longtitude: longitude,
        gambar_bengkel: gambarBengkel,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log('Updated Bengkel:', response.data);
      alert('Bengkel updated successfully!');
      navigate("/bengkel");
    } catch (error) {
      console.error('Error updating bengkel:', error);
      alert('Failed to update bengkel.');
    }
  };

  return (
    <div className="main-bengkel">
      <div className='title-bengkel'>
      <h3>Perbaharui Profil Bengkel</h3>
      </div>
      <div className="card-bengkel">
      <form onSubmit={handleSubmit} className="edit-bengkel">
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Bengkel</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaBengkel}
                    onChange={(e) => setNamaBengkel(e.target.value)}
                    placeholder="Nama Bengkel"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Telepon Bengkel</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noTlpBengkel}
                    onChange={(e) => setNoTlpBengkel(e.target.value)}
                    placeholder="No Telepon Bengkel"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Deskripsi</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    placeholder="Deskripsi"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Latitude</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Latitude"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Longitude</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Longitude"
                    required
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Gambar Bengkel</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={gambarBengkel}
                    onChange={(e) => setGambarBengkel(e.target.value)}
                    placeholder="Gambar Bengkel"
                  />
                </div>
              </div> */}
              <div className="field-btn">
                <div className="control-btn">
                  <button type="submit">
                    Ubah
                  </button>
                </div>
                <Link to="/bengkel">
                    <button type="button" className="btn-cancel">
                      Batal
                    </button>
                  </Link>
              </div>
            </form>
      </div>
    </div>
  );
};

export default EditProfile;
