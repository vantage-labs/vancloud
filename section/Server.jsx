import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Server = () => {
   useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="col text-center">
              <h5 className="s2">Temukan</h5>
              <h2>Lokasi Server</h2>
              <p className="lead">
                Jangkauan global, performa lokal: percepat kecepatan situs web Anda
                dan tingkatkan pengalaman pengguna dengan lokasi server strategis di seluruh dunia.
              </p>
              <div className="spacer-20"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12"
            data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="1200"
        data-aos-easing="ease">
            <div className="p-sm-30 pb-sm-0 mb-sm-0">
              <div className="de-map-hotspot">
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "39%", left: "20%" }}
                >
                  <span>Amerika Serikat</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "76%", left: "87%" }}
                >
                  <span>Australia</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "68%", left: "80%" }}
                >
                  <span>Indonesia</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "23%", left: "18%" }}
                >
                  <span>Kanada</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "68%", left: "33%" }}
                >
                  <span>Brasil</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "45%", left: "75%" }}
                >
                  <span>Tiongkok</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "36%", left: "48%" }}
                >
                  <span>Prancis</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "23%", left: "51%" }}
                >
                  <span>Swedia</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "78%", left: "53%" }}
                >
                  <span>Afrika Selatan</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <img src="images/misc/map.png" className="img-fluid" alt="Peta Lokasi Server" />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-double"></div>
      </div>
  );
};

export default Server;
