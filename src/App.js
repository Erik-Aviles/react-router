import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage/index';
import { BlocPage } from './components/BlocPage/Bloc';
import { ProfilePage } from './components/ProfilePage'; 

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/bloc" element={<BlocPage /> }/>
          <Route path="/profile" element={<ProfilePage /> }/>
          <Route path="*" element={<p>Not found</p> }/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
