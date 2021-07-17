import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <li className="gastos-realizados">
    <p>
      {expense.nameExpense}

      <span className="gasto">$ {expense.amountExpense}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default Expense;
