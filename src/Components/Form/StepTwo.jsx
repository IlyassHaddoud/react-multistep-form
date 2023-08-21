import { useContext } from "react";
import FormContext from "../../Contexts/FormContext";

const StepTwo = () => {
  const { goBack, goNext, about, setAbout } = useContext(FormContext);

  return (
    <div className="form steptwo">
      <h1>About your Company</h1>
      <textarea
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="tell me more about your start-up, company or organization."
      ></textarea>
      <div>
        <button onClick={goBack}>Back</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
