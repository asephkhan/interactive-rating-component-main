import { useState } from "react";
import iconStar from "./assets/images/icon-star.svg";
import thankyouimage from "./assets/images/illustration-thank-you.svg";
import "./App.css";

const Circle = ({ children, onClick, selected, value }) => {
  const isActive = value === selected;
   console.log({ value, selected, isActive });
  return (
    <button
      className={isActive ? "card__circle_active" : "card__circle"}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
};



const Button = ({text, onClick}) => {

  return (
    <div>
      <button onClick={onClick} className="card__button">{text}</button>
    </div>
  );
};

const Card = ({ selected, onSelect, onSubmit }) => {
  return (
    <>
      <div className="card">
          <div className="card__circle" >
          <img  className="card__star_icon" src={iconStar} alt="star icon" />
        </div>

        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="card__rating_score">
          {[1, 2, 3, 4, 5].map((value) => (
            <Circle key={value} onClick={onSelect} value={value} selected={selected} >
              {value}
            </Circle>
          ))}
        </div>

        <Button onClick={onSubmit}  text="SUBMIT" />
      </div>
    </>
  );
};

const ThankYouCard = ({ selected }) => {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <img className="card__image" src={thankyouimage} alt="" />
      <p className="card__rating_result" /* style={{color: "orange-500"}} */>
        You selected {selected} out of 5{" "}
      </p>
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
  const [submit, setSubmit] = useState(false)
  console.log("selected", selected);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleSubmit = () => {
      
      setSubmit(true)
  }

  return (
    <div>      
      {submit ? <ThankYouCard selected={selected} /> : <Card selected={selected} onSelect={handleSelect} onSubmit={handleSubmit} /> }
      
      {/* <!-- Thank you state end --> */}
    </div>
  );
}

export default App;
