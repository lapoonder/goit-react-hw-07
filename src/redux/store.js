import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";

const persistConfig = {
    key: "сontacts",
    storage,
    whitelist: ["items"], // Сохраняем только items
};

// Оборачиваем contactsReducer в persistReducer
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"], // Игнорируем предупреждение
            },
        }),
});

// Создаем persistor для PersistGate
export const persistor = persistStore(store);
