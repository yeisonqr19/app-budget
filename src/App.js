import React, { useState } from "react";
import { Ask } from "./components/Ask";
import { FormExpenses } from "./components/FormExpenses";

function App() {
  //States Principales para controlar el presupuesto:
  const [budget, setBudget] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>weekly expenditure</h1>
        <div className="contenido-principal contenido">
          <Ask setBudget={setBudget} setRestante={setRestante} />

          {!(budget < 1 || isNaN(budget)) && (
            <div className="row">
              <div className="one-half column">
                <FormExpenses />
              </div>

              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
