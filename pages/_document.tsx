import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="id">
      <Head>
        
        {/* Meta Utama */}
        <meta name="description" content="VanCloud adalah layanan cloud hosting premium dari Vantage Labs. Nikmati kecepatan tinggi, keamanan maksimal, dan fleksibilitas untuk website & bisnis Anda." />
        <meta name="keywords" content="VanCloud, cloud hosting Indonesia, VPS, dedicated server, hosting terbaik, hosting bisnis, hosting cepat, hosting aman, Vantage Labs" />
        <meta name="author" content="VanCloud - Sebuah Brand dari Vantage Labs" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="id" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VanCloud - Cloud Hosting Cepat, Aman, & Scalable" />
        <meta property="og:description" content="VanCloud dari Vantage Labs menawarkan hosting berkinerja tinggi dengan server cepat, aman, dan fleksibel untuk kebutuhan bisnis modern." />
        <meta property="og:image" content="https://www.vancloud.com/assets/images/vancloud-preview.jpg" />
        <meta property="og:url" content="https://www.vancloud.com" />
        <meta property="og:site_name" content="VanCloud" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VanCloud - Cloud Hosting Cepat, Aman, & Scalable" />
        <meta name="twitter:description" content="VanCloud dari Vantage Labs menawarkan hosting berkinerja tinggi dengan server cepat, aman, dan fleksibel untuk kebutuhan bisnis modern." />
        <meta name="twitter:image" content="https://www.vancloud.com/assets/images/vancloud-preview.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
