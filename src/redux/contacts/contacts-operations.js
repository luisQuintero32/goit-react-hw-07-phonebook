import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://64bec6885ee688b6250cea56.mockapi.io/api";

export const fetchContact = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await fetch(`${BASE_URL}/Contacts`);
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        console.log("Fetch ",contact);
        try {
            const data = await fetch(`${BASE_URL}/Contacts`, {
              method: "POST",
              body: JSON.stringify({
                name: contact.name,
                number: contact.number  
              }),
              headers: {
                "content-type": "application/json",
              },
            });
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const data = await fetch(`${BASE_URL}/Contacts/${contactId}`, {
                method: "DELETE",
            });
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);