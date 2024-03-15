import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Home() {
  return (
    <div>
      <div class="jumbotron-fluid text-center pt-60">
        <div class="container d-flex justify-center align-middle">
          <div className="text-7xl">
            <TiWeatherPartlySunny />
          </div>
          <div>
            <h1 class="display-4">Weather</h1>
            <p class="lead">Free Weather App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
