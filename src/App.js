import VideoItems from "./components/VideoItems";
import logo from "./images/logo.png";
import "./scss/main.scss";
import "animate.css";

function App() {
  return (
    <div className="App">
      <section className="intro">
        <div className="wrapper">
          <div className="intro-items">
            <a href="/" className="logo animate__bounceInDown">
              <img src={logo} alt="Adulthood University" />
            </a>
            <h1 className="intro-items__title">
              Welcome to the Adulthood University!
            </h1>
            <h3 className="intro-items__guide">
              <a href="#" className="scroll-mouse"></a>
              <span className="scroll-text">Follow</span>
            </h3>
          </div>
        </div>
      </section>

      <VideoItems />

      <footer className="footer">
        <div className="wrapper">
          <p className="footer__text">
            <b>See you in class!</b>
            <span>Remember to stay young!</span><br />
            <i>Powered by @masterboda</i>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
