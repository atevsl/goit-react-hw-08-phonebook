import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logOut } from 'redux/auth/authSlice';

export const fetchContactList = createAsyncThunk(
  'contactList/fetchContactList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contactList/postContacts',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contactList/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: { contactList: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContactList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactList.fulfilled, (state, { payload }) => {
        state.contactList = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContactList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(postContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(postContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contactList.push(payload);
      })
      .addCase(postContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactList.findIndex(
          contact => contact.id === payload.id
        );
        state.contactList.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.contactList = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactListSliceReducer = contactListSlice.reducer;
