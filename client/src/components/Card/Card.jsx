//este componente debe mostrar la info de cada usuario mapeado, pero ademas, darnos un link para ir al detalle del usuario en cuestion

import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import style from "./Card.module.css";

const Card = ({props}) => {

  return (
    <Link to={`/detail/${props.id}`} className={style.cardLink}> {/* Usa Link con la URL de detalle */}
      <div className={style.card}>
        <p>Nombre:{props.name}</p>
        <img src={props.image} alt="not found"/>
        <p>Altura: min {props.height_min} max: {props.height_max}</p>
        <p>Peso: min {props.weight_min} max {props.weight_max}</p>
        <p>añosDeVida: {props.life_span}</p>
      </div>
    </Link>
  );
};

export default Card;
// id, name, height_min, weight_min, height_max, weight_max, life_span, image, createdInDB