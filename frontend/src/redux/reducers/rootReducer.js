import { combineReducers } from "redux";
import citiesReducer from './citiesReducer';
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from './usersReducer';
import activitiesReducer from "./activitiesReducer";

/**es el único encargado de modificar el State de los componentes. Es que atrapa las actions */

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer,
    activities: activitiesReducer
})


export default rootReducer