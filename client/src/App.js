import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/home" />
        <Route path="/Detail" />
        <Route path="/Form" />
        <Route path="/About" />
        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;