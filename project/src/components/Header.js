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
            
                <Link className="active navlink" to="/">HOME</Link>
              
                <Link className='navlink' to="/catalog">IN THEATERS</Link>
              
                <Link className='navlink' to="/coming">COMING SOON</Link>
              
              {user.email
                    ?
                    <>
                      <Link className='navlink' to="/create">ADD MOVIE</Link>
                      <Link className='navlink' to="/logout">LOGOUT</Link>
                    </> 
                    :
                    <> 
                      <Link className='navlink' to="/login">LOGIN</Link>
                      <Link className='navlink' to="/register">REGISTER</Link>
                    </>
                }
            
          </nav>
        </header>
    )
}