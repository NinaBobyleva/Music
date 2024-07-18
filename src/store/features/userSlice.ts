import { fetchToken } from "@/api/token";
import { fetchUser, fetchUserSignUp } from "@/api/user";
import { Tokens } from "@/types/tokens";
import { UserType } from "@/types/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: { email: string; password: string }) => {
    const getUsers = fetchUser({ email, password });
    return getUsers;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }: { email: string; password: string }) => {
    const userSignUp = fetchUserSignUp({ email, password });
    return userSignUp;
  }
);

export const getTokens = createAsyncThunk(
  "token/getToken",
  async ({ email, password }: { email: string; password: string }) => {
    const tokens = fetchToken({ email, password });
    return tokens;
  }
);

type AuthStateType = {
  user: UserType | null;
  authState: boolean;
  tokens: Tokens | null;
};

const initialState: AuthStateType = {
  user: null,
  authState: false,
  tokens: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authState = false;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        getTokens.fulfilled,
        (state, action: PayloadAction<Tokens>) => {
          state.authState = true;
          state.tokens = action.payload;
        }
      )
      .addCase(signUp.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      })
      .addCase(signUp.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
