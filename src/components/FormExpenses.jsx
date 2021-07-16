import React, { useState } from "react";

export const FormExpenses = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Add your Expenses Here</h2>
        <label htmlFor="nameExpense">name of expense</label>
        <input
          type="text"
          name="nameExpense"
          id="nameExpense"
          className="u-full-width"
          placeholder="Ej. Food "
        />

        <label htmlFor="amountExpense">amount of expense</label>
        <input
          type="number"
          name="amountExpense"
          id="amountExpense"
          className="u-full-width"
          placeholder="Ej. 4000"
        />

        <input
          type="submit"
          value="save expense"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
};
