import React, { useState, useEffect } from "react";
import { Ask } from "./components/Ask";
import { FormExpenses } from "./components/FormExpenses";
import ShowExpenses from "./components/ShowExpenses";
import ControlBudget from "./components/ControlBudget";

function App() {
  //States Principales para controlar el presupuesto:
  const [budget, setBudget] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showask, setShowask] = useState(true);

  //State para controlar todos los gastos:
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //useEffect que actualiza el restante:

  useEffect(() => {
    if (createExpense) {
      //Agrega el nuevo presupuesto
      setExpenses([...expenses, expense]);

      //Resta del presupuesto:

      const budgetRestante = restante - expense.amountExpense;
      setRestante(budgetRestante);
    }
    setCreateExpense(false);
  }, [expense, createExpense, restante, expenses]);

  return (
    <div className="container">
      <header>
        <h1>weekly expenditure</h1>
      </header>
      <div className="contenido-principal contenido">
        {showask ? (
          <Ask
            setBudget={setBudget}
            setRestante={setRestante}
            setShowask={setShowask}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <FormExpenses
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}
              />
            </div>

            <div className="one-half column">
              <ShowExpenses expenses={expenses} />

              <ControlBudget budget={budget} restante={restante} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
