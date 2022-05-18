import React from "react";

import "./moedaResults.css";

export default function CalculoMoedas(props) {
  const { valorEmReais, moeda, valorConvertido } = props;
  return (
    <>
      <div className="moedaResult">
        <h2>
          Resultado da Conversão: com R${valorEmReais} você consegue comprar{" "}
          {moeda} {valorConvertido}
        </h2>
      </div>
    </>
  );
}
