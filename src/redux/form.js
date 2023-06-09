import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../utils/api";
import axios from "axios";

export const PostContact = createAsyncThunk("Form/post", async (body) => {
  return await axios.post(`${API_URL}/form`, body).then((res) => res);
});
export const GetContact = createAsyncThunk("Form/get", async () => {
  return await axios.get(`${API_URL}/form`).then((response) => response.data);
});

const ContactSlice = createSlice({
  name: "Form",
  initialState: {
    postContact: {
      Error: false,
      Loading: false,
      Success: false,
    },
    getContact: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
  },
  extraReducers: {
    [PostContact.pending]: (state, action) => {
      state.postContact.loading = true;
    },
    [PostContact.fulfilled]: (state, action) => {
      state.postContact.Error = false;
      state.postContact.Success = true;
      state.postContact.Loading = false;
    },
    [PostContact.rejected]: (state, action) => {
      state.postContact.Error = true;
      state.postContact.Success = false;
      state.postContact.Loading = false;
    },
    [GetContact.pending]: (state, action) => {
      state.getContact.loading = true;
    },
    [GetContact.fulfilled]: (state, action) => {
      state.getContact.Error = false;
      state.getContact.Success = true;
      state.getContact.Loading = false;
      state.getContact.Data = action.payload;
    },
    [GetContact.rejected]: (state, action) => {
      state.getContact.Error = true;
      state.getContact.Success = false;
      state.getContact.Loading = false;
      state.getContact.Data = [];
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
