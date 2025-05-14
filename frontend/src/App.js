// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapImg from './assets/images/capthrow.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'bootstrap';
// import Button from "react-bootstrap/Button";

function App() {
  return (
    <div class="container main-screen">
        <div class="row d-flex justify-content-center">
          <div class="col col-4 intro-container d-inline align-content-center text-center"> 
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
            <div class="col col-12">
              <span class="intro-msg-one"> 
                And Welcome to My Page
              </span>
            </div>
          </div>
          <div class="col col-8 pb-3 img-container text-center">
            <img class="image-design" alt='Graduation photo' src={CapImg}></img>
          </div>
        </div>
        <div class="row degree-container">
          <div class="col col-4 reference-container d-inline text-center">
            <div class="row reference-follow">
              <div class="col col-12 text-center">
                <span>
                  <span class="reference-header">Jump To:</span>     
                </span>
              </div>
              <div class="col col-12 text-center">
                <a class="reference" href="#summary">
                  <span class="reference-item">
                    <FontAwesomeIcon icon={faMinus} />
                    <span class="reference-item">Summary</span>     
                  </span>
                </a>
              </div>
              <div class="col col-12 text-center">
                <a class="reference" href="#work-history">
                  <span class="reference-item">
                    <FontAwesomeIcon icon={faMinus} />
                    <span class="reference-item">Work History</span>     
                  </span>
                </a>
              </div>
              <div class="col col-12 text-center">
                <a class="reference" href="#education">
                  <span class="reference-item">
                    <FontAwesomeIcon icon={faMinus} />
                    <span>Education</span>     
                  </span>    
                </a>
              </div>
            </div>
          </div>

          <div class="col col-8 text-center mt-2">
            <div class="col col-12 text-center" id="summary">
              <h3 class="section-header">
                Summary
              </h3>
              <hr/>
            </div>
            <div class="col col-12 summary-intro text-start">
              <span>
                Hi, I'm Jonathan Dressel — a dedicated Software Engineer with a strong focus on 
              front-end development and a passion for creating clean, responsive, and intuitive 
              user experiences. With four years of professional experience and a solid foundation 
              in C#, JavaScript, and Delphi, I enjoy building solutions that are both functional and user-centered. 
              </span>    
            </div>
            <div class="col col-12 summary-paragraph text-start mt-2">
              <span>
                  My interest in software development began during my college years, where I earned a degree 
                in Computer Science and developed a strong foundation in programming, 
                system design, and real-world application development. Those experiences shaped my 
                approach to problem-solving and sparked a lasting enthusiasm for continuous learning.
                </span>
            </div>
            <div class="col col-12 summary-paragraph text-start mt-2">
              <span>
                Feel free to explore my work history and education below to get a better sense of my journey
               and the skills I've developed along the way.
              </span>
            </div>

            <div class="col col-12 text-center mt-2" id="work-history">
              <h3 class="section-header">
                Work History
              </h3>
              <hr/>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-position">
                Software Engineer  @
              </span>
              <span class="experience-company">
               RetireReady Solutions
              </span>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-dates">
                December 2022 - Present
              </span>
            </div>
            <div class="col col-12 text-start">
              <ul class="experience-details">
                <li>
                  Launched the launch of PensionPortal, enhancing pension plan comprehension for over 10,000 government employees through
                  intuitive UI design and real-time data updates
                </li>
                <li>
                  Managed two production servers using Azure, Docker, and Kubernetes, achieving 99.9% uptime and optimizing web service
                  scalability to support a 30% increase in traffic
                </li>
                <li>
                  Engineered and maintained high-performance web applications using .NET framework, JavaScript, C#, and Delphi, increasing
                  user satisfaction and functionality by 20%
                </li>
              </ul>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-position">
                Associate Software Engineer  @
              </span>
              <span class="experience-company">
                Electric Scooter Guide
              </span>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-dates">
                January 2023 - March 2023
              </span>
            </div>
            <div class="col col-12 text-start">
              <ul class="experience-details">
                <li>
                  Launched the launch of PensionPortal, enhancing pension plan comprehension for over 10,000 government employees through
                  intuitive UI design and real-time data updates
                </li>
                <li>
                  Led the integration of 10+ new features, enhancing site functionality and boosting user satisfaction by 20%
                  Resolved 50+ critical bugs, increasing system stability by 30% and reducing downtime by 15%
                </li>
              </ul>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-position">
                Softare Engineer Intern  @
              </span>
              <span class="experience-company">
               HP Inc
              </span>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-dates">
                June 2022 - September 2022
              </span>
            </div>
            <div class="col col-12 text-start">
              <ul class="experience-details">
                <li>
                  Developed the CAMP website for over 5,000 HP employees, streamlining access to hundreds of critical tools through intuitive UI
                  design and scalable infrastructure
                </li>
                <li>
                  Leveraged C#, JavaScript, CSS, and HTML within the .NET Core framework to improve system efficiency by 20%, enhancing
                  user experience across the platform
                </li>
                <li>
                  Devised and implemented an optimized code flow strategy, reducing load times by 30% and boosting user engagement by 25%
                  on the intranet platform
                </li>
              </ul>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-position">
              QA Tester/Software Engineering Intern  @
              </span>
              <span class="experience-company">
               RetireReady Solutions
              </span>
            </div>
            <div class="col col-12 text-start">
              <span class="experience-dates">
                June 2020 - September 2021
              </span>
            </div>
            <div class="col col-12 text-start">
              <ul class="experience-details">
                <li>
                  Identified and resolved 50+ critical bugs, increasing application reliability by 30% and significantly enhancing the user experience
                  based on post-release feedback
                </li>
                <li>
                  Improved testing efficiency by creating reusable automation scripts, reducing overall testing time by 20% and enhancing test
                  coverage across key application modules
                </li>
                <li>
                  Led the enhancement of QA methodologies, implementing automated test strategies and structured workflows that improved
                  defect detection rates by 15%
                </li>
              </ul>
            </div>
            <div class="col col-12 text-start text-center" id="education">
              <h3 class="section-header">
                Education
              </h3>
              <hr/>
            </div>
            <div class="col col-12 text-start">
                <span class="education-college">
                  Oregon State University
                </span>
              </div>

              <div class="col col-12 text-start">
                <span class="eudcation-detail">
                  Bachelor of Science in Computer Science: September 2018 - June 2022
                </span>
              </div>

              <div class="col col-12 text-start">
                <span class="eudcation-detail">
                  GPA (3.65)
                </span>
              </div>
              <div class="col col-12 text-start">
                <span class="eudcation-detail">
                  Cum Laude
                </span>
              </div>

              <div class="col col-12 text-start">
                <span class="eudcation-detail">
                  Computer Science Teaching Asssistant: June 2020 - June 2021
                </span>
              </div>
              <div class="col col-12 text-start">
                <span class="eudcation-detail">
                  Dean's List: March 2018 - March 2020
                </span>
              </div>
          </div>
        </div>
        <div class="row footer">
          <div class="col col-12 text-start ms-3 mb-3 mt-3">
            <span href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jonathanedressel@gmail.com&su=Contacting to Learn More" target="_blank">
              <FontAwesomeIcon class="social-icon" icon={faEnvelope}></FontAwesomeIcon>
            </span>
            <a href='https://www.linkedin.com/in/jonathan-dressel/' target='_blank'>
              <FontAwesomeIcon class="social-icon" icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href='https://github.com/JonathanEDressel?tab=repositories' target='_blank'>
              <FontAwesomeIcon class="social-icon" icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>

        </div>
    </div>
  );
}

export default App;
