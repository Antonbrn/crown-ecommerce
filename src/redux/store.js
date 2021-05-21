import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

//För att kunna lägga in fler middelwares i arrayen som skickas in i applyMiddleware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//persist används för att kunna cacha state så vi kan behålla det även fast sidan uppdateras.
const persistor = persistStore(store);

export { store, persistor };
