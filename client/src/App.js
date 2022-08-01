import { Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
import { BottomBar } from './components/BottomBar';

import {
  AprendamosPage,
  HomePage,
  LoginPage,
  LogrosPage,
  PreguntaPage,
  RegisterPage,
  TestPage,
  TutorialesPage,
} from './components/pages';
import { CategoriaPage } from './components/pages/CategoriaPage';
import { UserProvider } from './context/UserProvider';
import { AppRouter } from './routes/AppRouter';
import { PrivateRoute } from './routes/PrivateRoute';


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<LoginPage />} />;
        <Route path='registro' element={<RegisterPage />} />;
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <AppRouter />
            </PrivateRoute>
          }
        />
        ;
      </Routes>
    </UserProvider>
  );
}

export default App;
