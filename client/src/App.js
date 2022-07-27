import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home, LoginPage, RegisterPage } from './components/pages';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='login' element={<LoginPage />} />;
        <Route path='registro' element={<RegisterPage />} />;
        <Route path='/*' element={<Home />} />;
      </Routes>
    </UserProvider>
  );
}

export default App;
