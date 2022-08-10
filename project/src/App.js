
import './App.css';
import { Routes, Route} from 'react-router';
import { Login } from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register'
import { Logout } from './components/Logout/Logout';
import { Home } from './components/Home/Home'
import { AuthProvider} from './contexts/AuthContext'
import { PrivateGuard } from './components/common/PrivateGuard'
import { PrivateRoute } from './components/common/PrivateRoute'
import { MovieProvider } from './contexts/MovieContext';
import { Catalog } from './components/catalog/Catalog';
import { MovieDetails } from './components/catalog/MovieDetails';
import { CreateMovie } from './components/catalog/CreateMovie';
import { EditMovie } from './components/catalog/EditMovie';
import { NewsProvider } from './contexts/NewsContext';
import { NewsPage } from './components/news/NewsPage';
import { CreateNews } from './components/news/CreateNews';
import { EditNews } from './components/news/EditNews';



function App() {
  return (
    <>
      <MovieProvider>
          <AuthProvider>
            <NewsProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterWithAuth/>} />
                <Route element={<PrivateGuard />}>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/details/:movieId/edit" element={<EditMovie />} />
                    <Route path="/news/:newsId/edit" element={<EditNews />} />
                </Route>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/create" element={(
                    <PrivateRoute>
                        <CreateMovie />
                    </PrivateRoute>
                )} />
                <Route path="/add" element={(
                    <PrivateRoute>
                        <CreateNews />
                    </PrivateRoute>
                )} />
                <Route path="/details/:movieId" element={<MovieDetails />} />
              </Routes>
            </NewsProvider>
          </AuthProvider>
        </MovieProvider>
      </>
  );
}

export default App;
