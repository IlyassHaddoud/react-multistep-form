import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [percent, setPercent] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const goNext = () => {
    if (currentPage <= 2) {
      setCurrentPage((precedent) => precedent + 1);
      setPercent((precedent) => precedent + 50);
    }
  };
  const goBack = () => {
    if (currentPage > 1) setCurrentPage((precedent) => precedent - 1);
    setPercent((precedent) => precedent - 50);
  };

  return (
    <FormContext.Provider
      value={{
        currentPage,
        percent,
        goBack,
        goNext,
        setName,
        setAbout,
        setAddress,
        setEmail,
        setCity,
        setZip,
        setCountry,
        name,
        email,
        about,
        country,
        city,
        zip,
        address,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
