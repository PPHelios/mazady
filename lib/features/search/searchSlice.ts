import { Item } from "@/types/types";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

type ApiResponse = any;

interface SearchByIdPayload {
  category: string;
  id: string;
}interface SearchCategoryPayload {
  category: string;
}

const initialState = {
  loading: false,
  ads: [] as Item[] | null,
};

export const searchCategory = createAsyncThunk<
  ApiResponse,
  SearchCategoryPayload,
  { rejectValue: SerializedError }
>("search/searchCategory", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/search/${payload.category}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return rejectWithValue(errorData.message);
    }
    return response.json();
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const searchItemId = createAsyncThunk<
  ApiResponse,
  SearchByIdPayload,
  { rejectValue: SerializedError }
>("search/searchCategory", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/search/${payload.category}/${payload.id}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return rejectWithValue(errorData.message);
    }
    return response.json();
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCategory.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(searchCategory.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.ads = action.payload.ads;
      })
      .addCase(searchCategory.rejected, (state, action) => {
        console.log("rejected");
        state.loading = false;
      });
  },
});

export default searchSlice.reducer;
