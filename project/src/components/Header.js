import { Link } from 'react-router-dom';

export const Header=()=>{
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
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}