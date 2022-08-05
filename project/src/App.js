
import './App.css';
import { Routes, Route} from 'react-router';
import { Login } from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register'
import { Logout } from './components/Logout/Logout';
import { Home } from './components/Home/Home'
import { AuthProvider} from './contexts/AuthContext'
import { PrivateGuard } from './components/common/PrivateGuard'
import { MovieProvider } from './contexts/MovieContext';

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
              </Route>
            </Routes>
          </AuthProvider>
        </MovieProvider>
      </>
  );
}

export default App;
