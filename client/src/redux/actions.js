// import axios from "axios";


// export const GET_DOGS = "GET_DOGS";
// export const GET_DOG = "GET_DOG";


// export const getDogs = () => {
//     return async function(dispatch){
//         const apiData = await axios.get(
//             `https://api.thedogapi.com/v1/breeds`
//             );
//             const dogs = apiData.data;
//             dispatch({ type: GET_DOGS, payload: dogs})
//     };
// };




// export const getDog = (id) => {  // ver como es el tema con el apikey
//     return async function(dispatch){
//         const apiData = await axios.get(
//             `https://api.thedogapi.com/v1/breeds/${id}`
//             );
//             const dog = apiData.data;
//             dispatch({ type: GET_DOG, payload: dog})
//     };
// };

import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/dogs`);
      const dogs = apiData.data;
      dispatch({ type: GET_DOGS, payload: dogs });
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };
};

export const getById = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
      const dog = apiData.data;
      dispatch({ type: GET_DOG_BY_ID, payload: dog });
    } catch (error) {
      console.error(`Error fetching dog`, error);
    }
  };
};

export function getDogsByName(name) {
  return async function (dispatch) {
      const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      return dispatch({
          type: "GET_DOGS_BY_NAME",
          payload: data
      });
  };
}

//https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

//https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}