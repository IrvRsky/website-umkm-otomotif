import React from "react";
import { FaMotorcycle, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsBookmarkStarFill,
  BsCashCoin,
  BsDatabaseFillUp,
  BsClipboard2MinusFill,
  BsChatLeftDots,
  BsCaretRightSquareFill,
  BsCaretDownFill,
} from "react-icons/bs";

function Pesanan() {
  return (
    <main className="main-order">
      <div className="main-title">
        <h2>PENDAPATAN</h2>
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
              <BsBookmarkStarFill className="card-reservasi-icon" />
            </div>
            <h3 className="hasil-reservasi">180 Pesanan</h3>
          </div>
          <div className="card-order">
            <div className="card-inner-mekanik">
              <h3>Layanan Panggilan</h3>
              <FaPhone className="card-mekanik-icon" />
            </div>
            <h3 className="hasil-reservasi">120 Pesanan</h3>
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
            <img src="/vite.svg"></img>
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
                <span>Jenis Kendaraan</span>
                <div className="kendaraan">
                  <FaMotorcycle className="icon-kendaraan"/>
                  <span>Motor</span>
                </div>
              </div>
              <div className="lokasi-pemesanan">
                <span>Lokasi Pemesanan</span>
                <div className="lokasi-user">
                  <div className="lokasi">
                    <FaMapMarkerAlt className="icon-lokasi"/> <span>Lapangan Kasihan, Bantul</span>
                  </div>
                  <a href="">
                    <BsCaretRightSquareFill className="icon-lokasi" />
                  </a>
                </div>
              </div>
              <div className="diskusi-pelanggan">
              <span>Diskusi Pelanggan</span>
                <div className="diskusi">
                <a href=""><BsChatLeftDots className="icon-lokasi"/></a>
                </div>
              </div>
            </div>
            <div className="more-detail">
              <a href="">Lihat Detail </a>
              <BsCaretDownFill className="icon-lokasi"/>
            </div>
          </div>
        </div>

        <div className="reservasi">
          <div className="img-profil-user">
            <img src="/vite.svg"></img>
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
                <span>Jenis Kendaraan</span>
                <div className="kendaraan">
                  <FaMotorcycle className="icon-kendaraan"/>
                  <span>Motor</span>
                </div>
              </div>
              <div className="jam-reservasi">
                <span>Jam Reservasi</span>
                <div className="jam">
                  
                </div>
              </div>
              <div className="tanggal-reservasi">
                <span>Tanggal Reservasi</span>
                <div className="tanggal">
                </div>
              </div>
              <div className="diskusi-pelanggan">
              <span>Diskusi Pelanggan</span>
                <div className="diskusi">
                <a href=""><BsChatLeftDots className="icon-lokasi"/></a>
                </div>
              </div>
            </div>
            <div className="more-detail">
              <a href="">Lihat Detail </a>
              <BsCaretDownFill className="icon-lokasi"/>
            </div>
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
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
          <div className="chat-content">
            <div className="user">
              <div className="user-img">
                <img src=""></img>
              </div>
              <div className="user-text">
                <h5 className="user-name">Budi</h5>
                <span>Terima Kasih..</span>
              </div>
            </div>
            <div className="status">
              <h5>Baca</h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pesanan;
