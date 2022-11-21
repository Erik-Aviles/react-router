import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider, AuthRouter } from './provider/AuthContext';
import { HomePage }from './pages/HomePage'
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage'; 
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import AddPost from './components/AddPost';
import EdithPost from './components/EdithPost';
import MoviePage from './pages/MoviePage';
import { PostProvider } from './provider/PostContext';
import Register from './components/Register/Register';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider >
          <Menu />
          <div className='app'>
          <Routes>
            <Route path="/" element={<HomePage /> } />
            <Route path="/blog" element=
              {
                <PostProvider>
                  <BlogPage />  
                </PostProvider> 
              }
            >
              <Route path=":slug" element={<BlogPost /> }/>
              <Route path="add-post" element={<AddPost /> }/>
              <Route path="edith-post" element={<EdithPost /> }/>
            </Route>
            <Route path='/movie' element={<MoviePage />} />
            <Route path="/login" element={<LoginPage /> }>
              <Route path="register" element={<Register />} />
            </Route>
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
          </div>
        </AuthProvider>
      </HashRouter>
    </>
  );

}

export default App;
