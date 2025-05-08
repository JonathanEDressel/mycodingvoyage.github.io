import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapImg from './assets/images/capthrow.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

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
          </div>
          <div class="col col-8 pb-3 img-container text-center">
            <img class="image-design" src={CapImg}></img>
          </div>
        </div>
        <div class="row">
          <div class="col col-4 reference-container d-inline align-content-center">
            <div class="col col-12 text-center">
              <span>
                <span class="reference-header">Reference</span>     
              </span>
            </div>
            <div class="col col-12 text-center">
              <span class="reference-item">
                <FontAwesomeIcon icon={faMinus} />
                <span class="reference-item">Summary</span>     
              </span>
            </div>
            <div class="col col-12 text-center">
              <span class="reference-item">
                <FontAwesomeIcon icon={faMinus} />
                <span class="reference-item">Work History</span>     
              </span>
            </div>
            <div class="col col-12 text-center">
            <span class="reference-item">
                <FontAwesomeIcon icon={faMinus} />
                <span>Education</span>     
              </span>    
            </div>
          </div>

          <div class="col col-8 text-center mt-2">
            <div class="col col-12 text-start">
              <h3 class="section-header">
                Summary
              </h3>
            </div>

            <div class="col col-12 text-start">
              <h3 class="section-header">
                Work History
              </h3>
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
            <div class="col col-12 text-start">
              <h3 class="section-header">
                Education
              </h3>

              <div class="col col-12 text-start">
                <span class="education-college">
                  Oregon State University
                </span>
              </div>

              <div class="col col-12 text-start">
                <span class="education-prompt">
                  Dates 
                </span>
                <span class="eudcation-detail">
                  : September 2018 - September 2022
                </span>
              </div>
              <div class="col col-12 text-start pt-0">
                <span class="education-prompt">
                  Degree 
                </span>
                <span class="eudcation-detail">
                  : Bachelor of Science in Computer Science
                </span>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
