import React, { useState } from "react";
import CalculoMoedas from "../../componentes/MoedaResults/MoedaResults";
import GreenButton from "../../componentes/GreenButton/GreenButton";

import "./moedas.css";
import axios from "axios";

export default function Moedas() {
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
          <div className="header-description">
            <h1>Conversor de Moedas</h1>
            <p>
              Selecione uma moeda estrangeira, digite o valor em real que você
              deseja converter para descobrir quanto você consegue trocar da sua
              moeda local (BRL) para a moeda estrangeira selecionada.
            </p>
          </div>
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
                <GreenButton text="calcular" />
              </div>
            </form>
          </div>
          {valorConvertido ? (
            <CalculoMoedas
              valorEmReais={valorEmReais}
              moeda={moeda}
              valorConvertido={valorConvertido}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
