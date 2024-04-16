import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/actions"; // Importa la acción para obtener los detalles del perro
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();      // Obtiene el ID del perro de los parámetros de la URL
  const dogById = useSelector((state) => state.dogById); // Obtiene los detalles del perro del estado global

  useEffect(() => {
    dispatch(getById(id)); // Dispara la acción para obtener los detalles del perro
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      {dogById && (
        <>
          <div>
            <img className={style.image} src={dogById.image} alt={dogById.name} />
          </div>
          <div className={style.text}>
            <h2>ID: {dogById.id}</h2>
            <h2>Nombre: {dogById.name}</h2>
            <p>Altura: {dogById.height}</p>
            <p>Peso: {dogById.weight}</p>
            <p>Temperamentos: {dogById.temperaments.join(", ")}</p>
            <p>Años de vida: {dogById.life_span}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;