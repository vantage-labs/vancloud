import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../public/images/logo.png';
import logoImgwhite from '../public/images/logo-light.png';
import logoImggreen from '../public/images/logo-green.png';
import logoImg1 from '../public/images/logo-mobile.png';

import Hosting1 from '../public/images/svg/server-svgrepo-com.svg';
import Hosting2 from '../public/images/svg/cloud-svgrepo-com.svg';
import Hosting3 from '../public/images/svg/server-2-svgrepo-com.svg';
import Hosting4 from '../public/images/svg/wordpress-svgrepo-com.svg';

import Domain1 from '../public/images/svg/domain-registration-svgrepo-com.svg';
import Domain2 from '../public/images/svg/transfer-svgrepo-com.svg';
import Domain3 from '../public/images/svg/price-tag-svgrepo-com.svg';
import Domain4 from '../public/images/svg/www-svgrepo-com.svg';

const Navbar = function () {

    const [showmenu, btn_icon] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null); // To track which dropdown is open

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index); // Toggle the specific dropdown by index
    };

    useEffect(() => {
        const header = document.getElementById("header-wrap");
        const totop = document.getElementById("scroll-to-top");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            /* btn_icon(false); */
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                totop.classList.add("show");
            } else {
                header.classList.remove("sticky");
                totop.classList.remove("show");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    return (
        <nav className="navbar transition">
            <div className="container">

                <div className="dekstopmenu">
                    <div className="de-flex-col header-col-mid">
                        <Link className="navbar-brand" href="/">
                            <Image src={logoImg} className="img-fluid logo-main" alt="logo" />
                            <Image src={logoImgwhite} className="img-fluid logo-main white" alt="logo" />
                            <Image src={logoImggreen} className="img-fluid logo-main green" alt="logo" />
                            <Image src={logoImg1} className="img-fluid logo-mobile" alt="logo" />
                        </Link>
                    </div>

                    {/* menu Here */}
                    <div className="de-flex-col header-col-mid mainmenu">
                        <ul id="mainmenu" className={`${showmenu ? 'menu-seluler' : ''}`}>

                            <li className={`menu-item-has-children has-child ${openDropdown === 2 ? 'open' : ''}`}>
                                <Link className="menu-item" href="/">Hosting</Link>
                                <span className="dropdown-arrow" onClick={() => toggleDropdown(2)}></span>
                                <ul className="mega">
                                    <li>
                                        <div className="container">
                                            <div className="sb-menu p-4 pb-0">
                                                <div className="row g-custom-x">
                                                    <div className="col-lg-4 mb-sm-30">
                                                        <h4>Hosting Mudah</h4>
                                                        <p>Hosting berkinerja tinggi dan aman untuk situs web Anda. Jangan kehilangan lebih banyak klien karena kecepatan hosting yang lambat. Lebih dari 100 ribu situs web telah dihosting.</p>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link className="box-icon mb20" href="/shared-hosting">
                                                            <Image src={Hosting1} className="img-fluid" alt="imgmenu" />
                                                            <div className="d-inner">
                                                                <h4>Hosting Bersama</h4>
                                                                Hosting sederhana dan kuat untuk semua orang.
                                                            </div>
                                                        </Link>
                                                        <Link className="box-icon mb20" href="/cloud-hosting">
                                                            <Image src={Hosting2} className="img-fluid" alt="imgmenu" />
                                                            <div className="d-inner">
                                                                <h4>Hosting Cloud</h4>
                                                                Untuk kecepatan lebih tinggi & waktu henti lebih sedikit.
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link className="box-icon mb20" href="/vps-hosting">
                                                            <Image src={Hosting3} className="img-fluid" alt="imgmenu" />
                                                            <div className="d-inner">
                                                                <h4>Hosting VPS</h4>
                                                                Untuk daya dan fleksibilitas yang Anda butuhkan.
                                                            </div>
                                                        </Link>
                                                        <Link className="box-icon mb20" href="/wp-hosting">
                                                            <Image src={Hosting4} className="img-fluid" alt="imgmenu" />
                                                            <div className="d-inner">
                                                                <h4>Hosting WordPress</h4>
                                                                Hosting yang dioptimalkan untuk situs WordPress.
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className={`menu-item-has-children has-child ${openDropdown === 3 ? 'open' : ''}`}>
                                <Link className="menu-item" href="/domain">Domain</Link>
                                <span className="dropdown-arrow" onClick={() => toggleDropdown(3)}></span>
                                <ul className="mega">
                                    <li>
                                        <div className="container">
                                            <div className="sb-menu p-4">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <Link className="box-icon mb20" href="/domain">
                                                            <Image src={Domain1} className="img-fluid" alt="domain" />
                                                            <div className="d-inner">
                                                                <h4>Pendaftaran Domain</h4>
                                                                Cari nama domain yang sempurna untuk Anda.
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <Link className="box-icon mb20" href="/domain-transfer">
                                                            <Image src={Domain2} className="img-fluid" alt="domain" />
                                                            <div className="d-inner">
                                                                <h4>Transfer Domain</h4>
                                                                Pindahkan domain Anda dengan langkah mudah.
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <Link className="box-icon mb20" href="/domain-pricing">
                                                            <Image src={Domain3} className="img-fluid" alt="domain" />
                                                            <div className="d-inner">
                                                                <h4>Harga Domain</h4>
                                                                Daftar lengkap harga domain.
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <Link className="box-icon mb20" href="/domain-top">
                                                            <Image src={Domain4} className="img-fluid" alt="domain" />
                                                            <div className="d-inner">
                                                                <h4>Domain Tingkat Atas</h4>
                                                                Domain terbaik untuk memulai bisnis Anda.
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className="clearfix"></div>

                                                    <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                                        <div className="box-url text-center">
                                                            <span className="tld-domain">.com</span>
                                                            <p className="tld-subtitle">Penawaran spesial</p>
                                                            <p className="tld-price id-color">$6.95/tahun</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                                        <div className="box-url text-center">
                                                            <span className="tld-domain">.net</span>
                                                            <p className="tld-subtitle">Penawaran spesial</p>
                                                            <p className="tld-price id-color">$6.95/tahun</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-2 col-sm-3 col-6 mb-sm-30">
                                                        <div className="box-url text-center">
                                                            <span className="tld-domain">.live</span>
                                                            <p className="tld-subtitle">Penawaran spesial</p>
                                                            <p className="tld-price id-color">$6.95/tahun</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><Link className="menu-item" href="/website">Website</Link></li>
                        </ul>
                    </div>
                    {/* menu Here */}

                    <div className="de-flex-col mobile">
                        <div className="menu_side_area">
                            <Link href="/login" className="btn-main">Uji coba gratis</Link>
                            <button className="burgermenu" type="button" onClick={() => btn_icon(!showmenu)}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar;