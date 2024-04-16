import { GET_DOGS, GET_DOG_BY_ID } from "./actions"; // Actualiza el nombre de la acción

const initialState = {
    dogs: [],
    alldogs:[],
    dogById: [], // Agrega una propiedad para almacenar los detalles del perro por ID

};


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, alldogs: action.payload };
        case GET_DOG_BY_ID: // Maneja la acción GET_DOG_BY_ID
            return { ...state, dogById: action.payload }; // Almacena los detalles del perro por ID
        default:
            return { ...state };
    }
};

export default rootReducer;