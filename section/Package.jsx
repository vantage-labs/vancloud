import React, { useState } from "react";

const Package = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked((prevState) => !prevState);
    };
    const switchClassName = isChecked ? 'switch checked' : 'switch';
    const otherElementClassName = isChecked ? 'other-element active' : 'other-element';

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="text-center">
                        <h5 className="s2">Paket Hosting</h5>
                        <h2>Pilih <span className="id-color">Paket Web Hosting</span> yang Tepat untuk Anda</h2>
                        <div className="spacer-20"></div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <div className="switch-set">
                        <div>Bulanan</div>
                        <div>
                            <input
                                id="sw-1"
                                className={switchClassName}
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                        </div>
                        <div>Tahunan</div>
                        <div className="spacer-20"></div>
                    </div>
                </div>
            </div>
            <div className="row de_pricing-tables shadow-soft g-0">
                {/* Paket Hosting */}
                {[
                    { name: "Single", description: "Pilihan terbaik untuk pemula", monthly: 12900, yearly: 29900, discount: "86%", originalPrice: 89900, features: ["1 Website", "10 GB SSD Storage", "Managed Hosting untuk WordPress", "Gratis domain (senilai Rp149.900)", "Gratis migrasi website otomatis", "1 Mailbox", "Gratis SSL Unlimited", "Backup Mingguan", "Gratis CDN"] },
                    { name: "Premium", description: "Cocok untuk personal branding atau blog Anda", monthly: 23900, yearly: 49900, discount: "80%", originalPrice: 119000, features: ["25 Website", "25 GB SSD Storage", "Managed Hosting untuk WordPress", "Gratis domain (senilai Rp149.900)", "Gratis migrasi website otomatis", "25 Mailbox", "Gratis SSL Unlimited", "Backup Mingguan", "Starter WooCommerce"], recommended: true },
                    { name: "Business", description: "Paket lengkap untuk bisnis, portal berita, atau toko online", monthly: 42900, yearly: 93900, discount: "69%", originalPrice: 139000, features: ["50 Website", "50 GB NVMe Storage", "Managed Hosting untuk WordPress", "Gratis domain (senilai Rp149.900)", "Gratis migrasi website otomatis", "50 Mailbox", "Gratis SSL Unlimited", "Backup Harian", "Basic WooCommerce"] },
                    { name: "Cloud Startup", description: "Performa website yang lebih optimal & powerful resource", monthly: 128900, yearly: 235900, discount: "59%", originalPrice: 312900, features: ["100 Website", "100 GB NVMe Storage", "Managed Hosting untuk WordPress", "Gratis domain (senilai Rp149.900)", "Gratis migrasi website otomatis", "100 Mailbox", "Gratis SSL Unlimited", "Backup Harian", "Standard WooCommerce"] },
                ].map((plan, index) => (
                    <div className="col-xl-3 col-lg-6" key={index}>
                        <div className={`de_pricing-table type-2 ${otherElementClassName}`}>
                            {plan.recommended && <div className="d-recommend">Paling Laris!</div>}
                            <div className="d-head">
                                <h3>{plan.name}</h3>
                                <p className="fs-6">{plan.description}</p>
                            </div>
                            <div className="d-price">
                                <p><s>Rp {plan.originalPrice}</s> <span className="discount-badge">DISKON {plan.discount}</span></p>
                                <h4>Rp {isChecked ? plan.yearly : plan.monthly}<span>/bln</span></h4>
                                <p className="bonus">+2 bulan gratis</p>
                            </div>
                            <div className="d-action">
                                <a href="#" className="btn-main w-100">Pilih Paket</a>
                            </div>
                            <div className="d-group">
                                <h4>Fitur Utama</h4>
                                <ul className="d-list">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Package;
