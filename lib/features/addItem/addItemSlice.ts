import { Item } from "@/types/types";
import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

interface ApiResponse {
  savedItem: Item;
}
type AddItemPayload = any;

const initialState = {
  loading: false,
  savedItem: {} ,
};

export const addNewItem = createAsyncThunk<
  ApiResponse,
  AddItemPayload,
  { rejectValue: SerializedError }
>("addItem/addNewItem", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/addItem`, {
      method: "POST",
      credentials: "include",
      body: payload,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return rejectWithValue(errorData.message);
    }
    return response.json();
  } catch (err: any) {
    console.log(err);
    return rejectWithValue(err.message);
  }
});

const addItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewItem.fulfilled, (state, action) => {
        state.loading = false;
        state.savedItem = action.payload.savedItem;
      })
      .addCase(addNewItem.rejected, (state, action) => {
        state.loading = false;
        state.savedItem = {};
      });
  },
});

export default addItemSlice.reducer;
