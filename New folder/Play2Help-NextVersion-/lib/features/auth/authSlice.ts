import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequests } from "@/components/utils/axiosRequests";
import { UserInterface } from "@/components/interface";

interface AuthState {
  isAuthenticated: boolean;
  isAdministrator: boolean;
  isFreelancer: boolean;
  loogedInUser: UserInterface;
}

const initialState: AuthState = {
  isFreelancer: false,
  isAuthenticated: false,
  isAdministrator: false,
  loogedInUser: {} as UserInterface,
};

export const fetchLoggedInUser = createAsyncThunk('auth/fetchLoggedInUser', async () => {
  const protectedRoute = AxiosRequests();
  const url = '/users/getLoggedInUser/';
  const response = await protectedRoute.get(url);
  if (response.status === 201) {
    return response.data;
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLoggedInUser.pending, (state) => {
      state.isAuthenticated = false;
      state.isAdministrator = false;
    })
    builder.addCase(fetchLoggedInUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.loogedInUser = action.payload.user;
        state.isAuthenticated = true;
        const role = action.payload.user.role;
        if (role === "administrator") {
          state.isAdministrator = true;
        }
        if (role === "freelancer") {
          state.isFreelancer = true;
        }
      }
    })
    builder.addCase(fetchLoggedInUser.rejected, (state) => {
      state.isAuthenticated = false;
      state.isAdministrator = false;
      state.isFreelancer = false;
    })
  },
});
export const authReducer = authSlice.reducer;