import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { Error } from "./Error";

export const FormExpenses = ({ setExpense, setCreateExpense }) => {
 
  const [expenses, setExpenses] = useState({
    nameExpense: "",
    amountExpense: 0,
    id: "",
  });

  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const formControl = ({ target }) => {
    setExpenses({
      ...expenses,
      [target.name]: target.value,
    });
  };

  const { nameExpense, amountExpense } = expenses;

  //Para controlar cuando agreguen los gastos
  const addExpense = (e) => {
    e.preventDefault();

    const expense = parseInt(amountExpense);

    if (expense < 1 && nameExpense.trim() === "") {
      setError(true);
      setMessageError("All fields are required");
      return;
    }

    if (expense < 1 || isNaN(expense)) {
      setError(true);
      setMessageError("please enter a valid amount");
      return;
    }

    if (nameExpense.length < 2) {
      setError(true);
      setMessageError("enter a valid expense name");
      return;
    }
    setError(false);
    expenses.id = uuidv4();
    setExpense(expenses);
    setCreateExpense(true);

    //Reset Form
    setExpenses({
      nameExpense: "",
      amountExpense: 0,
      id: "",
    });
  };

  return (
    <>
      <form onSubmit={addExpense}>
        <h2>Add your Expenses Here</h2>

        {error && <Error message={messageError} />}
        <div className="campo">
          <label htmlFor="nameExpense">name of expense</label>
          <input
            type="text"
            name="nameExpense"
            id="nameExpense"
            className="u-full-width"
            placeholder="Ej. Food "
            value={nameExpense}
            onChange={formControl}
          />
        </div>

        <div className="campo">
          <label htmlFor="amountExpense">amount of expense</label>
          <input
            type="number"
            name="amountExpense"
            id="amountExpense"
            className="u-full-width"
            placeholder="Ej. 4000"
            value={amountExpense}
            onChange={formControl}
          />
        </div>

        <input
          type="submit"
          value="save expense"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
};

FormExpenses.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};
