import axios from "axios";
import { FaHome, FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <nav class="navbar navbar-light">
              <div class="">
                <a class="navbar-brand text-white fw-bold" href="#">
                  WeatherApp
                </a>
              </div>
            </nav>
          </div>
          <div className="col-8 ">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link
                  class="nav-link text-white fw-bold hover:bg-blue-700"
                  aria-current="page"
                  to="/"
                >
                  <i
                    src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                    alt=""
                    class="d-inline-block align-text-top pt-0.5 pr-2"
                  >
                    <FaHome color="white" className="h-5 w-5" />
                  </i>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white fw-bold hover:bg-green-700"
                  to="/Weather"
                >
                  <i
                    src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                    alt=""
                    class="d-inline-block align-text-top pt-0.5 pr-2"
                  >
                    <FaCloud color="white" className="h-5 w-5" />
                  </i>
                  Weather
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
