
import './App.css';
import { Routes, Route} from 'react-router';
import { Login } from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register'
import { Home } from './components/Home'
import { AuthProvider} from './contexts/AuthContext'

function App() {
  return (
      <>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterWithAuth/>} />
          </Routes>
        </AuthProvider>
      </>
  );
}

export default App;
