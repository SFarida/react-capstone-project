import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Countries from './components/Countries';

function App() {
  return (
    <main className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Countries />} />
          {/* <Route path="air-pollution-statistics/:city" element={<PollutionDetail />} /> */}
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
