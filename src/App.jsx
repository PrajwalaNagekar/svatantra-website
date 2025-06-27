import Topbar from './components/layouts/Topbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/footer';
import AppRoutes from './routes/Approutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // only animate once per element
    });
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
