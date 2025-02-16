import 'font-awesome/css/font-awesome.min.css';
import 'elegant-icons/style.css';
import 'et-line/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/animated.css';
import '../styles/aos.css';
import '../styles/style.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
