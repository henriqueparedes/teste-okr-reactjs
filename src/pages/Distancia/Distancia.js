import React, { useState } from "react";

import "./distancia.css";

export default function Distancia() {
  const [cep1, setCep1] = useState("");
  const [cep2, setCep2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="body">
          <div className="cepInputs">
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="CEP 1"
                onChange={(event) => setCep1(event.currentTarget.value)}
                value={cep1}
              />
              <input
                type="number"
                placeholder="CEP 2"
                onChange={(event) => setCep2(event.currentTarget.value)}
                value={cep2}
              />
              <button className="calcular">Obter Distância</button>
            </form>
          </div>
          <div className="cepInputs">
            <h2>Distância</h2>
            <h3>CEP 1:</h3>
            <div className="results">
              <p>Cidade:</p>
              <p>Bairro:</p>
              <p>Rua:</p>
            </div>
            <h3>CEP 2:</h3>
            <div className="results">
              <p>Cidade:</p>
              <p>Bairro:</p>
              <p>Rua:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
