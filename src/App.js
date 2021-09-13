import VideoItems from "./components/VideoItems";
import logo from "./images/logo.png";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <section className="intro">
        <div className="wrapper">
          <div className="intro-items">
            <a href="/" className="logo">
              <img src={logo} alt="Adulthood University" />
            </a>
            <h1 className="intro-items__title">
              Welcome to the Adulthood University!
            </h1>
            <h3 className="intro-items__text">Follow guides...</h3>
          </div>
          <span className="scroll-bottom">Go</span>
        </div>
      </section>

      <VideoItems />

      <footer className="footer">
        <div className="wrapper">
          <p className="footer__text">
            <b>See you in class!</b>
            <span>Remember to stay young!</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
