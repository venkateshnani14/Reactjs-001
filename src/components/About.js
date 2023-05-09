import React from 'react'
import Navbar from './Navbar'
import App from '../App'
// import ReactDOM from "react-dom/client";

export default function About() {
  return (
    <div className='col-10'>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        About us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first React app that I have built referring code with harry.</strong> The application contains the relevant JavaScript required to perform crud operations.The logics that were built using React were a bit complicated but as the time went on,it became easier.This app is completely built using the ReactJS libraby and havent attached any backend yet,hoping to seeing that soon and make changes to do the application even better.  <code>.accordion-body</code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Contact us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>You can follow us on | <a id="tags" href="venkateshnani14@gmail.com">Gmail</a>| <a href="LInkedin.com/venkateshkasani" id="tags">LinkedIn</a> | <a href="twitter.com/venkateshkasani" id="tags">Twitter</a> | <a href="https://www.instagram.com/venkatesh_nani14/" id="tags">Instagram</a> | <a href="#" id="tags">Github</a> |
</strong> We work ultimately for the better user experience all the time.We team,are trying our best to enhance the website to make it look much more better and more effective for all the students out there.If you have any queries or any ideas to suggest for the website's development,drop us a mail.<code>(Venkateshkasani14@gmail.com)</code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        FAQ
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>Frequently asked questions</strong> <br/>
        <ol>
          <li>
          Who is the founder/co-founder of your organisation?<br/>A. Batman
          </li>
          <li>
            Whats your organisation's size?Do you hire people at all?<br/>A. Yes,Indeed!
          </li>
          <li>
            Did this idea really evolve from your own intuitions?<br/>A. Of course.
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
