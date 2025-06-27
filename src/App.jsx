import Topbar from './components/layouts/Topbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/footer';
import AppRoutes from './routes/Approutes';
function App() {
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
