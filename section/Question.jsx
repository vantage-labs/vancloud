import React, { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Question = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

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
                    <div className="col text-center">
                        <h5 className="s2">Apakah Anda Memiliki</h5>
                        <h2>Pertanyaan?</h2>
                        <div className="spacer-20"></div>
                    </div>
                </div>
                <div className="row g-custom-x">
                    <div className="col-md-6" 
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                        data-aos-easing="ease"> 
                        <div className="accordion secondary">
                            <div className="accordion-section">
                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-1' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-1')}
                                    >
                                    Bagaimana cara memulai dengan hosting web?
                                </div>
                                
                                <div className={`accordion-section-content ${openSection === 'accordion-1' ? 'open' : ''}`} id="accordion-1">
                                    <p>Cari penyedia hosting web yang memiliki antarmuka yang mudah digunakan dan fitur yang ramah bagi pemula. Pertimbangkan faktor seperti harga, dukungan pelanggan, jaminan uptime, dan ulasan pengguna.</p>
                                </div>
                                
                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-2' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-2')}
                                    >
                                    Apa perbedaan dari setiap paket?
                                </div>

                                    <div className={`accordion-section-content ${openSection === 'accordion-2' ? 'open' : ''}`} id="accordion-2">
                                        <p>Terdapat berbagai jenis hosting seperti shared hosting, VPS hosting, dedicated server hosting, atau cloud hosting. Setiap jenis menawarkan tingkat sumber daya, kontrol, dan skalabilitas yang berbeda. Pilih jenis yang sesuai dengan kebutuhan dan anggaran situs web Anda.</p>
                                    </div>

                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-3' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-3')}
                                    >
                                    Jenis hosting web apa yang saya butuhkan?
                                </div>
                                
                                    <div className={`accordion-section-content ${openSection === 'accordion-3' ? 'open' : ''}`} id="accordion-3">
                                        <p>Evaluasi kebutuhan situs web Anda, termasuk perkiraan lalu lintas, kapasitas penyimpanan, bandwidth, basis data, dan perangkat lunak khusus yang digunakan. Memahami kebutuhan Anda akan membantu memilih paket hosting yang sesuai.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                        data-aos-easing="ease">
                        <div className="accordion secondary">
                            <div className="accordion-section">
                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-4' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-4')}
                                    >
                                    Mengapa saya membutuhkan nama domain?
                                </div>
                                
                                    <div className={`accordion-section-content ${openSection === 'accordion-4' ? 'open' : ''}`} id="accordion-4">
                                        <p>Nama domain adalah identitas unik Anda di internet. Ini membantu menciptakan merek yang mudah dikenali dan diingat untuk situs web atau bisnis Anda, serta memudahkan pengguna menemukan dan mengingat situs Anda.</p>
                                    </div>
                                
                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-5' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-5')}
                                    >
                                    Bagaimana situs web saya dilindungi dari peretas?
                                </div>
                               
                                    <div className={`accordion-section-content ${openSection === 'accordion-5' ? 'open' : ''}`} id="accordion-5">
                                        <p>Pastikan selalu memperbarui perangkat lunak situs web Anda, termasuk sistem manajemen konten (CMS), plugin, tema, dan aplikasi lainnya. Pembaruan ini sering kali berisi patch keamanan yang melindungi dari celah keamanan yang dapat dimanfaatkan oleh peretas.</p>
                                    </div>
                               
                                <div 
                                    className={`accordion-section-title ${openSection === 'accordion-6' ? 'open' : ''}`}
                                    onClick={() => toggleSection('accordion-6')}
                                    >
                                    Bagaimana cara mencadangkan situs web saya?
                                </div>
                                
                                    <div className={`accordion-section-content ${openSection === 'accordion-6' ? 'open' : ''}`} id="accordion-6">
                                        <p>Hosting kami memiliki mekanisme pencadangan dan pemulihan bencana untuk melindungi data dari kehilangan, kegagalan perangkat keras, atau bencana lainnya. Pencadangan rutin dan sistem penyimpanan redundan membantu menjaga integritas dan ketersediaan data Anda.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Question;
