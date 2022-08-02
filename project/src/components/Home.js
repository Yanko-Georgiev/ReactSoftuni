
import { Header } from './Header';
import { Footer } from './Footer';

export const Home=()=>{

    return(
    <>
        <Header/>
        <div id="main">
          <div id="content">
            <div className="box">
              <div className="head">
                <h2>LATEST MOVIES</h2>
              </div>
              <div className="movie">
                <div className="movie-image">
                    <span className="name">SPIDER MAN 2</span>
                  <a href="#">
                    <img src="images/movie2.jpg" alt="" />
                  </a>
                </div>
                <div className="rating">
                  <p>RATING</p>
                  <div className="stars">
                    <div className="stars-in"> </div>
                  </div>
                </div>
              </div>
              <div className="movie">
                <div className="movie-image">

                  <span className="play">
                    <span className="name">VALKYRIE</span>
                  </span>
                  <a href="#">
                    <img src="images/movie4.jpg" alt="" />
                  </a>
                </div>
                <div className="rating">
                  <p>RATING</p>
                  <div className="stars">
                    <div className="stars-in"> </div>
                  </div>
                  <span className="comments">12</span>
                </div>
              </div>
              <div className="movie">
                <div className="movie-image">

                  <span className="play">
                    <span className="name">GLADIATOR</span>
                  </span>
                  <a href="#">
                    <img src="./images/movie5.jpg" alt="" />
                  </a>
                </div>
                <div className="rating">
                  <p>RATING</p>
                  <div className="stars">
                    <div className="stars-in"> </div>
                  </div>
                  <span className="comments">12</span>
                </div>
              </div>

              <div className="cl">&nbsp;</div>
            </div>
          </div>
          <div className="head">
              <h3>
                COMING SOON<strong>!</strong>
              </h3>
            </div>
          <div id="coming">
            <div className="content">
              <h4>Disney's A Christmas Carol</h4>
              <p>
                "Disney's A Christmas Carol," a multi-sensory thrill ride
                re-envisioned by Academy Award®-winning filmmaker Robert Zemeckis,
                captures...
              </p>
            </div>
            <div className="content">
              <h4>Where the Wild Things Are</h4>
              <p>
                Innovative director Spike Jonze collaborates with celebrated author
                Maurice Sendak to bring one of the most beloved books of all time to
                the big screen in "Where the Wild Things Are,"...
              </p>
            </div>
            <div className="content">
              <h4>The Box</h4>
              <p>
                Norma and Arthur Lewis are a suburban couple with a young child who
                receive an anonymous gift bearing fatal and irrevocable consequences.
              </p>
            </div>
            <div className="content">
              <h4>The Princess and the Frog </h4>
              <a href="#">
                <img src="images/coming-soon1.jpg" alt="" />
              </a>
              <p>
                Walt Disney Animation Studios presents the musical "The Princess and
                the Frog," an animated comedy set in the great city of New Orleans...
              </p>
            </div>
            <div className="cl">&nbsp;</div>
            <div className="content">
              <h4>The Princess and the Frog </h4>
              <a href="#">
                <img src="images/coming-soon2.jpg" alt="" />
              </a>
              <p>
                Walt Disney Animation Studios presents the musical "The Princess and
                the Frog," an animated comedy set in the great city of New Orleans...
              </p>
            </div>
          </div>
          <div className="cl">&nbsp;</div>
        </div>
        <Footer/>
    </>
    )
}