import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
// const Loading = lazy(()=> import('./pages/Loading'));

const App = () => {
  return (
    <div className="App">
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/loading" element={<Loading />} /> */}
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
