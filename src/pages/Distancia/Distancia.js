import React, { useEffect, useState } from "react";
import axios from "axios";

import "./distancia.css";
import DistanciaResults from "../../componentes/DistanciaResults/DistanciaResults";
import GreenButton from "../../componentes/GreenButton/GreenButton";

export default function Distancia() {
  const [cep1, setCep1] = useState("");
  const [cep2, setCep2] = useState("");
  const [cep1data, setCep1Data] = useState();
  const [cep2data, setCep2Data] = useState();
  const [distancia, setDistancia] = useState();

  const getDistanceFromLatLonInKm = (position1, position2) => {
    var deg2rad = function (deg) {
        return deg * (Math.PI / 180);
      },
      R = 6371,
      dLat = deg2rad(position2.lat - position1.lat),
      dLng = deg2rad(position2.lng - position1.lng),
      a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(position1.lat)) *
          Math.cos(deg2rad(position1.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c * 1000).toFixed();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(` https://cep.awesomeapi.com.br/json/${cep1}`)
      .then((response) => {
        setCep1Data(response.data);
      })
      .then(() => {
        axios
          .get(`https://cep.awesomeapi.com.br/json/${cep2}`)
          .then((response) => {
            setCep2Data(response.data);
          });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (cep1data && cep2data !== undefined) {
      const distancia = getDistanceFromLatLonInKm(
        { lat: cep1data.lat, lng: cep1data.lng },
        { lat: cep2data.lat, lng: cep2data.lng }
      );
      const distanciaEmKm = (Number(distancia) / 1000).toFixed(2);
      setDistancia(distanciaEmKm);
    }
  }, [cep1data, cep2data]);

  return (
    <>
      <div className="container">
        <div className="body">
          <div className="header-description">
            <h1>Calculadora de distância entre CEP's</h1>
            <p>
              Para calcular a distância entre 2 CEP's, digite a seguir os CEP's
              e clique em obter distância.
            </p>
          </div>
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
              <GreenButton text="Obter Distância" />
            </form>
          </div>
          {distancia ? (
            <DistanciaResults
              distancia={distancia}
              cep1={cep1data.cep}
              estado1={cep1data.state}
              cidade1={cep1data.city}
              bairro1={cep1data.district}
              rua1={cep1data.address}
              cep2={cep2data.cep}
              estado2={cep2data.state}
              cidade2={cep2data.city}
              bairro2={cep2data.district}
              rua2={cep2data.address}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
