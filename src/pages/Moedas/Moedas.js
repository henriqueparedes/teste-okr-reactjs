import React, { useState } from "react";

import "./moedas.css";
import axios from "axios";

export default function Distancia() {
  const moedas = [
    "Escolha",
    "USD",
    "CAD",
    "EUR",
    "GBP",
    "ARS",
    "BTC",
    "LTC",
    "JPY",
    "CHF",
    "AUD",
    "CNY",
    "ILS",
    "ETH",
    "XRP",
    "DOGE",
  ];
  const [moeda, setMoeda] = useState();
  const [valorEmReais, setValorEmReais] = useState();
  const [valorConvertido, setValorConvertido] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios
      .get(`https://economia.awesomeapi.com.br/last/${moeda}-BRL`)
      .catch((e) => console.log(e));
    const concatenar = `${moeda}BRL`;
    const cotacaoAtual = data[concatenar].bid;
    const conversao = Number(valorEmReais) / Number(cotacaoAtual);
    setValorConvertido(conversao.toFixed(2));
  };

  return (
    <>
      <div className="container">
        <div className="body">
          {/* <button onClick={getMoedas} /> */}
          <div className="selecao">
            <form onSubmit={handleSubmit}>
              <div className="esquerda">
                <h3>Escolha uma moeda para converter: </h3>
                <select onChange={(e) => setMoeda(e.target.value)} id="moedas">
                  {moedas.map((moeda, index) => (
                    <option key={index} value={moeda}>
                      {moeda}
                    </option>
                  ))}
                </select>
              </div>
              <div className="direita">
                <input
                  type="number"
                  placeholder="Valor em Real R$"
                  onChange={(e) => setValorEmReais(e.currentTarget.value)}
                  className="valorReal"
                />
                <button onClick={handleSubmit} className="calcular">
                  Calcular
                </button>
              </div>
            </form>
          </div>
          {valorConvertido ? (
            <div className="cepInputs">
              <h2>
                Resultado da Conversão: com R${valorEmReais} você consegue
                comprar {moeda} {valorConvertido}
              </h2>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
