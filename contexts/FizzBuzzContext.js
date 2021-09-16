import { createContext, useState } from "react";

const FizzBuzzContext = createContext();

const FizzBuzzProvider = ({ children }) => {
  const [fizzBuzz, setFizzBuzz] = useState([]);

  const refreshFizzBuzz = async () => {
    const updatedFizzBuzz = [];
    for (var x = -50; x < 50; x++) {
      updatedFizzBuzz.push({
        [x]: (x % 3 ? "" : "Fizz") + (x % 5 ? "" : "Buzz") || x,
      });
    }
    setFizzBuzz(updatedFizzBuzz);
  };

  return (
    <FizzBuzzContext.Provider
      value={{
        fizzBuzz,
        setFizzBuzz,
        refreshFizzBuzz,
      }}
    >
      {children}
    </FizzBuzzContext.Provider>
  );
};

export { FizzBuzzProvider, FizzBuzzContext };
