import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#815738',
        margin: '0 auto',
        padding: '20px',
        maxWidth: '100%',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
