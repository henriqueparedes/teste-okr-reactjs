import React from "react";

import "./distanciaResults.css";

export default function DistanciaResults(props) {
  const {
    distancia,
    cep1,
    estado1,
    cidade1,
    bairro1,
    rua1,
    cep2,
    estado2,
    cidade2,
    bairro2,
    rua2,
  } = props;
  return (
    <>
      <div className="cepInputs">
        <h2>Distância: {distancia} Km</h2>
        <h3>CEP 1: {cep1}</h3>
        <div className="results">
          <p>Estado: {estado1}</p>
          <p>Cidade: {cidade1}</p>
          <p>Bairro: {bairro1}</p>
          <p>Rua: {rua1}</p>
        </div>
        <h3>CEP 2: {cep2}</h3>
        <div className="results">
          <p>Estado: {estado2}</p>
          <p>Cidade: {cidade2}</p>
          <p>Bairro: {bairro2}</p>
          <p>Rua: {rua2}</p>
        </div>
      </div>
    </>
  );
}
