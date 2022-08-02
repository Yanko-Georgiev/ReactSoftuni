export const Header=()=>{
    return(
        <header>
          <h1 id="logo">
            <a href="/">MovieHunter</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a className="active" href="/">HOME</a>
              </li>
              <li>
                <a href="/catalog">IN THEATERS</a>
              </li>
              <li>
                <a href="/coming">COMING SOON</a>
              </li>
              <li>
                <a href="/login">LOGIN</a>
              </li>
              <li>
                <a href="/register">REGISTER</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}