import Stepper from "./Components/Stepper";
import StepOne from "./Components/Form/StepOne";
import StepTwo from "./Components/Form/StepTwo";
import StepThree from "./Components/Form/StepThree";
import { useContext } from "react";
import FormContext from "./Contexts/FormContext";

const App = () => {
  const { currentPage, percent } = useContext(FormContext);

  return (
    <div className="app">
      <Stepper percent={percent} />
      {currentPage == 1 && <StepOne />}
      {currentPage == 2 && <StepTwo />}
      {currentPage == 3 && <StepThree />}
    </div>
  );
};

export default App;
