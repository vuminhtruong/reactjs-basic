import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          React <FontAwesomeIcon icon={faReact} />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Services</a>
            <a class="nav-link" href="#">Product</a>
            <a class="nav-link" href="#">Contact us</a>
            <button type="button" class="btn btn-outline-info">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default App;
