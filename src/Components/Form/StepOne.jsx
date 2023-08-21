import { useContext } from "react";
import FormContext from "../../Contexts/FormContext";

const StepOne = () => {
  const { goNext, name, email, setName, setEmail } = useContext(FormContext);

  return (
    <div className="form stepone">
      <h1>Please fill in your details</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your full name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter your email address"
      />
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default StepOne;
