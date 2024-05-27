import React, { useState } from "react";
import {
  FaMotorcycle,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaMapMarkedAlt,
  FaUserSecret,
  FaUserCircle
} from "react-icons/fa";
import {
  BsClipboard2MinusFill,
  BsChatLeftDots,
  BsCaretDownFill,
  BsBookmarksFill
} from "react-icons/bs";

function Pesanan() {
  const [showDetail, setShowDetail] = useState(false); // State untuk menunjukkan detail

  const toggleDetail = () => {
    setShowDetail(!showDetail); // Toggle state
  };

  return (
    <main className="main-order">
      <div className="main-title">
        <h2>DATA PESANAN</h2>
      </div>

      {/* PENDAPATAN */}
      <div className="container-card">
        <div className="main-title">
          <h3>Jenis Layanan</h3>
        </div>

        <div className="main-order-cards">
          <div className="card-order">
            <div className="card-inner-reservasi">
              <h3>Layanan Reservasi</h3>
              <BsBookmarksFill className="card-reservasi-icon" />
            </div>
            <h4 className="hasil-reservasi">180 Pesanan</h4>
          </div>
          <div className="card-order">
            <div className="card-inner-mekanik">
              <h3>Layanan Panggilan</h3>
              <FaPhone className="card-mekanik-icon" />
            </div>
            <h4 className="hasil-reservasi">120 Pesanan</h4>
          </div>
        </div>
      </div>

      {/* DATA PEMESANAN */}
      <div className="container-order">
        <div className="main-title">
          <h3>Data Pemesanan</h3>
        </div>

        <div className="tipe-order">
          <div className="panggil-mekanik">
            <div className="img-profil-user">
              {/* <img src="/vite.svg"></img> */}
              <FaUserCircle className="user-img-profile"/>
            </div>
            <div className="profil-user">
              <div className="header-order">
                <div className="name-user">
                  <h3>Bagaskara</h3>
                </div>
                <div className="type-service">
                  <span>Layanan</span>
                  <div className="panggil">
                    <FaPhone className="icon" />
                    <span>Panggil Mekanik</span>
                  </div>
                </div>
              </div>

              <div className="detail-order">
                <div className="tipe-kendaraan">
                  <span className="jenis-kendaraan">Jenis Kendaraan</span>
                  <div className="kendaraan">
                  <FaMotorcycle className="icon-kendaraan" />
                    <span>Motor</span>
                    
                  </div>
                </div>
                <div className="lokasi-pemesanan">
                  <span className="lokasi-pesan">Lokasi Pemesanan</span>
                  <div className="lokasi-user">
                    <div className="lokasi">
                      {/* <FaMapMarkerAlt className="icon-lokasi" /> */}
                      <a href="">
                      <FaMapMarkedAlt className="icon-lokasi" />
                    </a>
                      <span>Lapangan Kasihan, Bantul</span>
                    </div>
                    
                  </div>
                </div>
                <div className="diskusi-pelanggan">
                  <span className="chat-pelanggan">Diskusi Pelanggan</span>
                  <div className="diskusi">
                    <a href="">
                    <BsChatLeftDots className="icon-lokasi" />
                      <span>Chat</span>
                      
                    </a>
                  </div>
                </div>
              </div>
              <div className="more-detail">
                {/* <Link to={"/detail-reservasi"}>Lihat Detail</Link> */}
                <a href="#" onClick={toggleDetail}>
                  Lihat Detail
                </a>
                <BsCaretDownFill className="icon-lokasi" />
              </div>
              {/* dropdown detail */}
              {showDetail && (
                <div className="detail-dropdown">
                  <div className="rincian-layanan">
                    <h4>Kendala Kendaraan</h4>
                    <div className="deskripsi-kendala">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi pretium, ex nec dictum ultricies, velit diam
                        sodales mauris, id finibus lorem sapien at turpis.
                        Nullam gravida justo nec rutrum eleifend. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Nulla
                        mollis volutpat velit. Phasellus facilisis laoreet
                        justo, at dapibus mauris mollis vel. Donec placerat
                        turpis augue, vitae pellentesque nunc tempus nec.
                        Suspendisse sit amet dapibus dui, nec sodales dui.
                        Curabitur condimentum, odio nec dapibus gravida, arcu
                        dolor eleifend augue, quis volutpat libero lacus ac
                        mauris. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas. Donec
                        pharetra metus neque, at aliquam ante mattis at. Nulla
                        ipsum ligula, fermentum blandit leo quis, fringilla
                        tempor sapien. Curabitur ac ligula in sem tempus
                        tincidunt. Ut vel dolor arcu. Vestibulum nec urna urna.
                      </p>
                    </div>
                  </div>
                  <div className="ulasan-pelanggan">
                    <h4>Ulasan</h4>
                    <div className="rating">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </div>
                    <div className="deskripsi-ulasan">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi pretium, ex nec dictum ultricies.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="reservasi">
            <div className="img-profil-user">
              {/* <img src="/vite.svg"></img> */}
              <FaUserCircle className="user-img-profile"/>
            </div>
            <div className="profil-user">
              <div className="header-order">
                <div className="name-user">
                  <h3>Budi</h3>
                </div>
                <div className="type-service">
                  <span>Layanan</span>
                  <div className="panggil">
                    <BsClipboard2MinusFill className="icon" />
                    <span>Reservasi</span>
                  </div>
                </div>
              </div>

              <div className="detail-order">
                <div className="tipe-kendaraan">
                  <span className="jenis-kendaraan">Jenis Kendaraan</span>
                  <div className="kendaraan">
                  <FaMotorcycle className="icon-kendaraan" />
                    <span>Motor</span>
                    
                  </div>
                </div>
                <div className="jam-reservasi">
                  <span className="jenis-kendaraan">Jam Reservasi</span>
                  <div className="jam"></div>
                </div>
                <div className="tanggal-reservasi">
                  <span className="jenis-kendaraan">Tanggal Reservasi</span>
                  <div className="tanggal"></div>
                </div>
                <div className="diskusi-pelanggan">
                  <span className="chat-pelanggan">Diskusi Pelanggan</span>
                  <div className="diskusi">
                    <a href="">
                    <BsChatLeftDots className="icon-lokasi" />
                      <span>Chat</span>
                      
                    </a>
                  </div>
                </div>
              </div>
              <div className="more-detail">
                {/* <Link to={"/detail-reservasi"}>Lihat Detail</Link> */}
                <a href="#" onClick={toggleDetail}>
                  Lihat Detail
                </a>
                <BsCaretDownFill className="icon-lokasi" />
              </div>
              {/* dropdown detail */}
              {showDetail && (
                <div className="detail-dropdown">
                  <div className="rincian-layanan">
                    <h4>Rincian Pesanan</h4>
                    <div className="rincian-pesanan">
                      <div className="detail-pesanan">
                        <p>Pengecekan Oli Mesin</p>
                        <span>Rp 15.000</span>
                      </div>
                      <div className="detail-pesanan">
                        <p>Pengecekan Aki</p>
                        <span>Rp 50.000</span>
                      </div>
                      <div className="detail-pesanan">
                        <p>Tambal & Tambah Ban Angin</p>
                        <span>Rp 15.000</span>
                      </div>
                    </div>
                    <div className="total-pesanan">
                      <p>Total</p>
                      <span>Rp 80.000</span>
                    </div>
                  </div>
                  <div className="ulasan-pelanggan">
                    <h4>Ulasan</h4>
                    <div className="rating">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </div>
                    <div className="deskripsi-ulasan">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi pretium, ex nec dictum ultricies, velit diam
                        sodales mauris, id finibus lorem sapien at turpis.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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

        <div className="chat-order-list">
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
    </main>
  );
}

export default Pesanan;
