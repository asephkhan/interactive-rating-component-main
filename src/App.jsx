import { useState } from "react";
import iconStar from "./assets/images/icon-star.svg";
import "./App.css";

 const Circle = (props) => {
  return (
    <>
    <div className="circle">
  {props.content}
    </div>
    </>
  )
} 

const Card = () => {
  return (
    <>
      <div className="card">
        <img className="card__star_icon" src={iconStar} alt="star icon" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="card__rating_score">
        <Circle content="1" />
        <Circle content="2" />
        <Circle content="3" />
        <Circle content="4" />
        <Circle content="5" />
        </div>


        
        <button>Submit</button>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <body>
        {/*  Rating state start  */}
        <Card />
        {/*  Rating state end  */}
        {/* <!-- Thank you state start --> */}
        You selected {/* <!-- Add rating here -->  */}out of 5 Thank you! We
        appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch!
        {/* <!-- Thank you state end --> */}
        <footer class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </footer>
      </body>
    </>
  );
}

export default App;
