import React from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

const ShowExpenses = ({ expenses }) => {
 
  return (
    <div className="gastos-realizados">
      <h2>List of expenses</h2>

      {/* {Ojo Aqui Tiene que llevar el return} */}
      {expenses.map((expense) => {
        return <Expense expense={expense} key={expense.id} />;
      })}
    </div>
  );
};

ShowExpenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ShowExpenses;
