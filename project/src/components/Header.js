import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export const Header=()=>{
  const { user } = useAuthContext();
    return(
        <header>
          <h1 id="logo">
            <Link to="/">MovieHunter</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link className="active" to="/">HOME</Link>
              </li>
              <li>
                <Link to="/catalog">IN THEATERS</Link>
              </li>
              <li>
                <Link to="/coming">COMING SOON</Link>
              </li>
              {user.email
                    ? <li><Link to="/logout">LOGOUT</Link></li>
                    : <li><Link to="/login">LOGIN</Link></li>
                }
            </ul>
          </nav>
        </header>
    )
}