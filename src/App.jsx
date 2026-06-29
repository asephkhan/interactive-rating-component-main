import { useState } from "react";
import iconStar from "./assets/images/icon-star.svg";
import thankyouimage from "./assets/images/illustration-thank-you.svg";
import "./App.css";

const Circle = ({ children, onClick, selectedValue }) => {
  return (
    <button className="card__circle" onClick={() => onClick(selectedValue)}>
      {children}
    </button>
  );
};

const Button = (props) => {
  return (
    <div>
      <button className="card__button">{props.text}</button>
    </div>
  );
};

const Card = ({ selected, onSelect }) => {
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
          {[1, 2, 3, 4, 5].map((value) => (
            <Circle key={value} onClick={onSelect} selectedValue={value}>
              {value}
            </Circle>
          ))}
        </div>

        <Button text="SUBMIT" />
      </div>
    </>
  );
};

const ThankYouCard = ({ selected }) => {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <img  className="card__image" src={thankyouimage} alt="" />
      <p className="card__rating_result" /* style={{color: "orange-500"}} */>You selected {selected} out of 5 </p>
      <h1>Thank you!</h1>{" "}
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

function App() {
  const [selected, setSelected] = useState(0);
  console.log("selected", selected);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div>
      {/*  Rating state start  */}
      <Card selected={selected} onSelect={handleSelect} />
      {/*  Rating state end  */}
      {/* <!-- Thank you state start --> */}
      <ThankYouCard selected={selected} />
      {/* <!-- Thank you state end --> */}
    </div>
  );
}

export default App;
