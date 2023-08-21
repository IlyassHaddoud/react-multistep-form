import { useContext } from "react";
import FormContext from "../../Contexts/FormContext";

const StepThree = () => {
  const {
    goBack,
    country,
    setCountry,
    city,
    setCity,
    zip,
    setZip,
    address,
    setAddress,
  } = useContext(FormContext);

  return (
    <div className="form stepthree">
      <h1>Builling details</h1>
      <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        type="text"
        placeholder="Country"
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="City"
      />
      <input
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        type="text"
        placeholder="Zip Code"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Full Address"
      />
      <div>
        <button onClick={goBack}>Back</button>
        <button onClick={() => alert("Registration succefully")}>Submit</button>
      </div>
    </div>
  );
};

export default StepThree;
