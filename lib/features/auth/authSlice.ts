import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

interface ApiResponse {
  first_name: string;
  last_name: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  user: ApiResponse | null;
}

interface SignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  rePassword: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  user: null,
};

export const signupUser = createAsyncThunk<
  ApiResponse,
  SignupPayload,
  { rejectValue: SerializedError }
>("auth/signup", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/auth/register`,
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
    const res = await response.json();
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const loginUser = createAsyncThunk<
  ApiResponse,
  LoginPayload,
  { rejectValue: SerializedError }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message);
    }
    const res = await response.json();
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: SerializedError }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/logout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return rejectWithValue(errorData.message);
    }
    // If the API does not return a response, resolve with void
  } catch (err: any) {
    console.log(err);
    return rejectWithValue(err.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
