
import { createBrowserRouter } from "react-router-dom";

import BmiCalculator from "../BMI/BmiCalculator";
import Homepage from "../BMI/HomePage/homePage";

const router = createBrowserRouter([
   {
    path: '',
    element:<Homepage/>,
   },
    {
        path:'/BMICalculator',
        element:<BmiCalculator/>
    }
])

export default router;