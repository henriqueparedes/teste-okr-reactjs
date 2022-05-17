import React from "react";

import "./home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="body">
          <h1 className="webpage-title">BEM VINDO AO DESAFIO FINAL - OKR</h1>
          <div className="biografia">
            <img src="./user.png" alt="usuario" />
            <p className="lorem">
              <strong>Lorem ipsum </strong>
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sit amet consectetur
              adipiscing elit pellentesque habitant morbi tristique senectus. In
              tellus integer feugiat scelerisque varius. Cras adipiscing enim eu
              turpis egestas.
            </p>
          </div>
          <div className="opcoes">
            <a href="http://localhost:3000/calculadora-distancia">
              <button>Calculador de Distância</button>
            </a>
            <a href="http://localhost:3000/calculadora-moedas">
              <button>Converter Moedas</button>
            </a>
          </div>
          <div className="bibliografia">
            <h2>Bibliografia</h2>
            <a href="https://www.udemy.com/course/react-completo-do-basico-ao-avancado">
              https://www.udemy.com/course/react-completo-do-basico-ao-avancado
            </a>
            <a href="https://docs.awesomeapi.com.br/api-de-moedas">
              https://docs.awesomeapi.com.br/api-de-moedas
            </a>
            <a href="https://docs.awesomeapi.com.br/api-cep">
              https://docs.awesomeapi.com.br/api-cep
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
