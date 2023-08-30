import { useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCars } from './store/autoReducer/autoSlice';
import { Navbar } from './components/';
import { CarsPage, ErrorPage, FavsPage, HomePage, SingleCarPage } from 'pages';
import { useActions } from 'hooks/actions';
import { useAppSelector } from 'hooks/redux';

function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  const { filterInit } = useActions();
  const { cars } = useAppSelector((store) => store.autoReducer);
  useEffect(() => {
    filterInit(cars);
  }, [cars]);
  return (
    <Auth0Provider
      domain="dev-c7v0dprhudkngxhq.us.auth0.com"
      clientId="Apa1IstmfBqZQAcEU9Mdgdlow8uIuFUy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavsPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<SingleCarPage />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
