import React from "react";
import PropTypes from "prop-types";
import { checkBudget } from "../helpers/helper";

const ControlBudget = ({ budget, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Budget:$ {budget}</div>
      <div className={checkBudget(budget, restante)}>
        remaining: $ {restante}
      </div>
    </>
  );
};

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlBudget;
