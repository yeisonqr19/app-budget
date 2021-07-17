import React, { useState } from "react";
import PropTypes from "prop-types";
import { Error } from "./Error";

export const Ask = ({ setBudget, setRestante, setShowask }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const defineBudget = ({ target }) => {
    setAmount(parseInt(target.value, 10));
  };

  //Control De presupuesto:
  const addBudget = (e) => {
    e.preventDefault();

    //Validacion de presupuesto:
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      setMessageError("Please, enter a valid budget");
      return;
    }
    setError(false);
    setBudget(amount);
    setRestante(amount);
    setShowask(false);
  };

  return (
    <>
      <h2>place your budget</h2>
      {error && <Error message={messageError} />}

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          name="budget"
          placeholder="Your Budget"
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="define budget"
        />
      </form>
    </>
  );
};

Ask.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setShowask: PropTypes.func.isRequired,
};
