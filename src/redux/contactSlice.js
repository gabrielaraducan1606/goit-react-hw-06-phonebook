import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [], 
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const contactExists = state.contacts.some(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (!contactExists) {
        state.contacts.push(action.payload);
      } else {
        console.error(
          `Contact "${action.payload.name}" already exists in contacts.`
        );
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload || ""; 
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"], 
};

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);
