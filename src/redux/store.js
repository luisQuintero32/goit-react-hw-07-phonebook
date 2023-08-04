// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import { filterReducer } from "./contacts/contacts-filter";
// import { contactsReducer } from "./contacts/contacts-slice";


// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
//     logger,
// ];

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     },
//     middleware,
// })

// const persistor = persistStore(store);
// // eslint-disable-next-line
// export default {store, persistor};

// selectors.js - archivo de declaración de las funciones-selectores
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./contacts/contacts-filter";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});