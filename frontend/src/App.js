import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapImg from './assets/images/capthrow.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div class="container main-screen">
        <div class="row mb-4 d-flex justify-content-center">
          <div class="col col-6 d-inline align-content-center"> 
            <div class="col col-12">
              <span class="intro-msg-one"> 
                Hi There,
              </span>
            </div>
            <div class="col col-12">
              <span class="intro-msg-two">
                I'm Jonathan Dressel
              </span>
            </div>
          </div>
          <div class="col col-auto">
            <img class="image-design" src={CapImg}></img>
          </div>
        </div>
        <div class="row">
          <div class="col col-4 d-inline align-content-center">
            <div class="col col-12 text-center">
              <span>
                <span class="reference-header">Reference</span>     
              </span>
            </div>
            <div class="col col-12 text-center">
              <span class="reference-item">
                <FontAwesomeIcon icon={faHandPointRight} />
                <span class="reference-item">Work History</span>     
              </span>
            </div>
            <div class="col col-12 text-center">
            <span class="reference-item">
                <FontAwesomeIcon icon={faHandPointRight} />
                <span class="reference-item">Education</span>     
              </span>    
            </div>

          </div>
          <div class="col col-8">
                    
          </div>
        </div>
    </div>
  );
}

export default App;
