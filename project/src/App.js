
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



function App() {
  return (
    <>
      <MovieProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterWithAuth/>} />
              <Route element={<PrivateGuard />}>
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/details/:movieId/edit" element={<EditMovie />} />
              </Route>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/create" element={(
                  <PrivateRoute>
                      <CreateMovie />
                  </PrivateRoute>
              )} />
              <Route path="/details/:movieId" element={<MovieDetails />} />
            </Routes>
          </AuthProvider>
        </MovieProvider>
      </>
  );
}

export default App;
