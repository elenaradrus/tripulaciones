import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, LoginPage, RegisterPage } from './components/pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='login' element={<LoginPage />} />;
      <Route path='registro' element={<RegisterPage />} />;
      <Route path='/*' element={<Home />} />;
    </Routes>
  );
}

export default App;
