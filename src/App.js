import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider, AuthRouter } from './components/auth';
import { HomePage }from './components/HomePage'
import { BlogPage } from './components/BlogPage/Bloc';
import { ProfilePage } from './components/ProfilePage'; 
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './components/LoginPage';
import { LogoutPage } from './components/LogoutPage';
import AddPost from './components/AddPost';
import EdithPost from './components/EdithPost';


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
              <Route path="add-post" element={<AddPost /> }/>
              <Route path="edith-post" element={<EdithPost /> }/>
            </Route>
            <Route path="/login" element={<LoginPage /> }/>
            <Route 
              path="/logout" 
              element={
                <AuthRouter>
                  <LogoutPage /> 
                </AuthRouter> }/>
            <Route
              path="/profile" 
              element={
                <AuthRouter>
                  <ProfilePage/>
                </AuthRouter> }>

            </Route>
            <Route path="*" element={<p>Not found</p> }/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );

}

export default App;
