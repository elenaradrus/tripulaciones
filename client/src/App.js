import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BottomBar } from './components/BottomBar';

import {
  AprendamosPage,
  HomePage,
  LoginPage,
  LogrosPage,
  RegisterPage,
  TestPage,
  TutorialesPage,
} from './components/pages';
import { CategoriaPage } from './components/pages/CategoriaPage';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />;
        <Route path='login' element={<LoginPage />} />;
        <Route path='registro' element={<RegisterPage />} />;
        <Route path='aprendamos' element={<AprendamosPage />} />;
        <Route path='aprendamos/:id' element={<CategoriaPage />} />;
        <Route path='aprendamos/:id/:test' element={<TestPage />} />;
        <Route path='logros' element={<LogrosPage />} />;
        <Route path='tutoriales' element={<TutorialesPage />} />;
        <Route path='/*' element={<HomePage />} />;
      </Routes>
      <BottomBar />
    </UserProvider>
  );
}

export default App;
