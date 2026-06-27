import { useState } from "react";
import iconStar from "./assets/images/icon-star.svg";
import "./App.css";

const Circle = ({ children }) => {
  return <div className="card__circle">{children}</div>;
};

const Button = (props) => {
  return (
    <div>
      <button className="card__button">{props.text}</button>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div className="card">
        <Circle>
          <img className="card__star_icon" src={iconStar} alt="star icon" />
        </Circle>

        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="card__rating_score">
          <Circle>1</Circle>
          <Circle>2</Circle>
          <Circle>3</Circle>
          <Circle>4</Circle>
          <Circle>5</Circle>
        </div>

        <Button text="SUBMIT" />
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
