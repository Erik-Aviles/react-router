import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider } from './components/auth';
import { HomePage }from './components/HomePage'
import { BlogPage } from './components/BlogPage/Bloc';
import { ProfilePage } from './components/ProfilePage'; 
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './components/LoginPage';
import { LogoutPage } from './components/LogoutPage';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage /> } />
            <Route path="/blog" element={<BlogPage /> }>
              <Route path=":slug" element={<BlogPost /> }/>
            </Route>
            <Route path="/login" element={<LoginPage /> }/>
            <Route path="/logout" element={<LogoutPage /> }/>
            <Route path="/profile" element={<ProfilePage /> }/>
            <Route path="*" element={<p>Not found</p> }/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );

}

export default App;
