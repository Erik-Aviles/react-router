import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider, AuthRouter } from './provider/AuthContext';
import { HomePage }from './pages/HomePage'
import { BlogPage } from './pages/BlogPage/Bloc';
import { ProfilePage } from './pages/ProfilePage'; 
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import AddPost from './components/AddPost';
import EdithPost from './components/EdithPost';
import MoviePage from './pages/MoviePage/MoviePage';
import { PostProvider } from './provider/PostContext';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider >
          <Menu />
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
