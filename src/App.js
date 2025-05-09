import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 'fontFamily': 'cursive' }}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <img src="blossom.jpeg" alt="" style={{ "width": "60px", "height": "64px" }} />
          <a class="navbar-brand" href="#" ><strong style={{ "paddingRight": "1000px" }}>Blossom</strong></a>
          <div id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#product">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#about">About</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-secondary" style={{ "border-radius": "18px" }}>contact us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="home" class="hero section" style={{ 'marginTop': "120px" }}>
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <img src="img0.jpg" alt="" style={{ "max-width": "650px" }} class="float-start"></img>
            </div>
            <div class="col">
              <div style={{ "marginTop": "50px" }}>
                <h3 class="float-start" >Welcome to Blossom 🌸</h3><br></br><br></br><br></br>
                <p style={{ "text-align": "justify" }}>At BLOSSOM, we believe gifting is a meaningful way to show love and appreciation. Explore our curated selection of plants, chocolates, and cakes, perfect for any occasion. With a user-friendly experience and options to personalize your gifts, we make it easy to create unforgettable moments. Discover the joy of giving with us!
                </p>
                <p class="card-text float-start"><small class="text-muted">"It’s not how much we give but how much love we put into giving." — Mother Teresa</small></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default App;