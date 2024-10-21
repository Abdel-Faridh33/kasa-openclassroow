import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './pages/About';
import NotFound from './components/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Detail />}/>
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
