import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import Logo from '../public/images/logo.png';
import Img1 from '../public/images/payments-logo/visa.png';
import Img2 from '../public/images/payments-logo/master-card.png';
import Img3 from '../public/images/payments-logo/jcb.png';
import Img4 from '../public/images/payments-logo/paypal.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer-light">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-4">
                        <Link href="#">
                            <Image width={250} height={40} src={'https://res.cloudinary.com/dt27bjldq/image/upload/v1739807305/logo_qeavtg.png'} alt="logofooter"/>
                            <div className="spacer-20"></div>
                            <p>Kami adalah vntagelabs, perusahaan hosting web dengan dukungan pelanggan 24/7. Kami menyediakan solusi hosting terbaik untuk kebutuhan Anda. Klien kami mencakup individu hingga perusahaan besar. Data center kami tersebar di seluruh dunia untuk memastikan situs web Anda selalu online. Anda dapat memilih shared hosting, VPS hosting, atau cloud hosting. Anda juga bisa menjadi reseller hosting di sini. Selamat menikmati layanan hosting bersama kami.</p>
                        </Link>
                        <div className="spacer-10"></div>
                        <div className="widget">
                            <h5>Kami Menerima</h5>
                            <Image src={Img1} className="img-card-sm" alt="logo"/>
                            <Image src={Img2} className="img-card-sm" alt="logo"/>
                            <Image src={Img3} className="img-card-sm" alt="logo"/>
                            <Image src={Img4} className="img-card-sm" alt="logo"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                        <div className="widget">
                            <h5>Hosting</h5>
                            <ul>
                                <li><a href="#">Web Hosting</a></li>
                                <li><a href="#">VPS Hosting</a></li>
                                <li><a href="#">Cloud Hosting</a></li>
                                <li><a href="#">WordPress Hosting</a></li>
                                <li><a href="#">Email Hosting</a></li>
                                <li><a href="#">CMS Hosting</a></li>
                                <li><a href="#">Ecommerce Hosting</a></li>
                                <li><a href="#">Website Builder</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="widget">
                            <h5>Perusahaan</h5>
                            <ul>
                                <li><a href="#">Tentang Kami</a></li>
                                <li><a href="#">Afiliasi</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Karier</a></li>
                                <li><a href="#">Komunitas</a></li>
                                <li><a href="#">Berita</a></li>
                                <li><a href="#">Mitra</a></li>
                                <li><a href="#">Siaran Pers</a></li>
                            </ul>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <p>Daftar ke newsletter kami untuk mendapatkan berita terbaru langsung ke email Anda.</p>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="Masukkan email Anda" type="text" /> <a href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></a>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Email Anda aman bersama kami. Kami tidak mengirimkan spam.</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Ikuti Kami di</h5>
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                                    <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <Link href="">
                                        Hak Cipta {currentYear} - vntagelabs oleh Designesia
                                    </Link>
                                </div>
                                <ul className="menu-simple">
                                    <li><a href="#">Syarat &amp; Ketentuan</a></li>
                                    <li><a href="#">Kebijakan Privasi</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
