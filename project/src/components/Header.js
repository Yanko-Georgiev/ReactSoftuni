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
            
                <Link className="navlink" id='home' to="/">HOME</Link>
              
                <Link className='navlink' id='catalog' to="/catalog">IN THEATERS</Link>
              
                <Link className='navlink' to="/coming">NEWS</Link>
              
              {user.email
                    ?
                    <>
                      <Link className='navlink' id='create' to="/create">ADD MOVIE</Link>
                      <Link className='navlink' id='add' to="/news">ADD NEWS</Link>
                      <Link className='navlink' to="/logout">LOGOUT</Link>
                    </> 
                    :
                    <> 
                      <Link className='navlink' id='login' to="/login">LOGIN</Link>
                      <Link className='navlink' id='register' to="/register">REGISTER</Link>
                    </>
                }
            
          </nav>
        </header>
    )
}