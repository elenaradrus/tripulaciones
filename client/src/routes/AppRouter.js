import { Navigate, Route, Routes } from 'react-router-dom';
import { BottomBar } from '../components/BottomBar';
import {
  AprendamosPage,
  CategoriaPage,
  HomePage,
  LogrosPage,
  Page404,
  PerfilPage,
  PreguntaPage,
  TestPage,
  TutorialesPage,
  Progreso
} from '../components/pages';
import RespuestasPage from '../components/pages/RespuestasPage';
import Resultados2Page from '../components/pages/Resultados2Page';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={<HomePage />} />;
        <Route path='aprendamos' element={<AprendamosPage />} />;
        <Route path='aprendamos/:id' element={<CategoriaPage />} />;
        <Route path='aprendamos/:id/:test' element={<TestPage />} />;
        <Route path='pregunta/:id' element={<PreguntaPage />} />;
        <Route path='logros' element={<LogrosPage />} />;
        <Route path='tutoriales' element={<TutorialesPage />} />;
        <Route path='noencontrada' element={<Page404 />} />;
        <Route path='perfil' element={<PerfilPage />} />;
        <Route path='respuestas' element={<RespuestasPage />} />;
        <Route path='/*' element={<Navigate to='noencontrada' />} />;
        <Route path='/progreso' element={<Progreso />} />;
        <Route path='/resultados2' element={<Resultados2Page />} />;


      </Routes>
      <BottomBar />
    </>
  );
};
