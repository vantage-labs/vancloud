import React from "react";

const Refund = () => {
  return (
    <section
      id="section-banner"
      className="no-bottom no-top bg-blue"
      data-bgcolor="#DBEDF7"
    >
      <div className="container">
        <div className="row align-items-center g-custom-x">
          <div className="col-lg-4 d-none d-lg-block d-xl-block text-center">
            <img
              className="relative img-fluid mt-60"
              src="../../images/misc/1.png"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="p-sm-30 pb-sm-0 mb-sm-0">
              <h2>
                <span className="color-gradient">30 hari</span> garansi uang kembali
              </h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="p-sm-30">
              <div className="spacer-20 sm-hide"></div>
              <p className="lead">
                Jika Anda tidak puas, kami akan mengembalikan pembayaran Anda. Tanpa ribet, tanpa risiko. Anda dapat membatalkan paket kapan saja.
              </p>
              <div className="spacer-half"></div>
              <a className="btn-main" href="#">
                Mulai Sekarang
              </a>
              <p className="d-small mt20">
                *Pembatalan harus dilakukan dalam waktu maksimal 30 hari
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund;
