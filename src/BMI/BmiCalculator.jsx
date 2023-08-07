import { useState } from "react";
import { Link } from "react-router-dom";
import "./bmi.css";
function BmiCalculator() {
  //
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  //BMI result

  const [resulta, setResult] = useState("Let's See : )");
  const [yourBmi, setBmi] = useState("");

  //BMI message
  const [message, setMessage] = useState("");

  function calcuBmi(e) {
    e.preventDefault();
    //CONVERT HEIGHT TO METERS
    let heightM = height / 100; //convert your height in to meters
    let multiplyHeight = heightM * heightM; //multiply your height by itself

    //DIVIDE WEIGHT TO HEIGHT ;
    let result = weight / multiplyHeight;

    let resultDecimal = result.toString().split("").splice(0, 5).join(""); // get the two decimal only ;

    setResult(resultDecimal);
    console.log(result);

    if (!Number(result)) {
      setMessage("Please enter a valid weight and height.");
      return setResult("Can't get your BMI, Try again !");
    }

    if (result < 18.5) {
      setMessage(
        "Focus on eating a balanced diet and gaining weight in a healthy way."
      );
      return setBmi("You are Underweight");
    }
    if (result <= 24.9 || result === 18.5) {
      setMessage(
        "Maintain a balanced diet and exercise regularly for overall health."
      );
      return setBmi("You are Normal Weight");
    }
    if (result <= 29.9 || result === 25.0) {
      setMessage("Engage in regular physical activity to manage weight.");
      return setBmi("You are OverWeight");
    }
    if (result > 30.0) {
      setMessage(
        "Focus on a balanced, calorie-controlled diet and increase physical activity."
      );
      return setBmi("You are Obese");
    }
  }
  //RESET function () ;
  function reset() {
    setHeight(0);
    setWeight(0);
    setBmi("");
    setResult("Lets See : )");
    setMessage("");
  }

  return (
    <div id="bmi">
      <Link to="/" id="link">
        HOME
      </Link>
      <br />
      <h1>BMI CALCULATOR</h1>
      <p>(For 20 or more years old)</p>
      <br />
      <form onSubmit={calcuBmi}>
        <div id="form">
          <h3>Height (cm)</h3>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <h3>Weight(kg)</h3>
          <input
            type="text"
            value={weight}
            id="Weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="CALCULATE" />
          <input type="button" value="RESET" onClick={reset} />
        </div>
      </form>
      <h3>RESULT</h3>
      <p>{resulta}</p>
      <p>{yourBmi}</p>
      <p>{message}</p>

      <br />
    </div>
  );
}

export default BmiCalculator;
