import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import './App.css';
import {getAllCountries, getAllActivities} from './redux/actions/actions';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';
import NavigateBar from './components/NavigateBar/NavigateBar';



function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    navigate('/');
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, []);

  return (
    <div className="App">
      {pathname !== '/' && <div className="navBar"> <NavigateBar /> </div>}
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Activity' element={<FormPage />} />
        <Route path='/Detail/:id' element={<DetailPage />} />

      </Routes>
    </div>
  );
};

export default App;