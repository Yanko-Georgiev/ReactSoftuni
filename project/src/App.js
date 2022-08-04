
import './App.css';
import { Routes, Route} from 'react-router';
import { Login } from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register'
import { Logout } from './components/Logout/Logout';
import { Home } from './components/Home'
import { AuthProvider} from './contexts/AuthContext'
import { PrivateGuard } from './components/common/PrivateGuard'

function App() {
  return (
      <>
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
      </>
  );
}

export default App;
