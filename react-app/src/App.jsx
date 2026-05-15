import { Routes, Route } from 'react-router-dom';
import { Header, Footer, WhatsAppButton } from './components';
import { Home, About, Products, Contact, Blog } from './pages';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
