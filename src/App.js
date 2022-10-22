import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { HomePage }from './components/HomePage'
import { BlogPage } from './components/BlogPage/Bloc';
import { ProfilePage } from './components/ProfilePage'; 
import { BlogPost } from './components/BlogPost';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/blog" element={<BlogPage /> }>
            <Route path=":slug" element={<BlogPost /> }/>
          </Route>
          <Route path="/profile" element={<ProfilePage /> }/>
          <Route path="*" element={<p>Not found</p> }/>
        </Routes>
      </HashRouter>
    </>
  );

}

export default App;
