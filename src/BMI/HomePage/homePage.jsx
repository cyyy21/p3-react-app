import { Link } from "react-router-dom";
import './homepage.css';
function Homepage() {
    return ( 
    <div>
        <h1>BMI CALCULATOR</h1>
        <p>The BMI Calculator app simplifies the process of assessing your weight status by calculating your body mass index (BMI) using your height and weight. It provides a quick and convenient way to determine if you are in a healthy weight range.</p>
    <Link to="/BMIcalculator" id = 'link'>START NOW</Link>
    </div>
     );
}

export default Homepage;