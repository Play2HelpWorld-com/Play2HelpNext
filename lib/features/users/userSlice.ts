import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequests } from "@/components/utils/axiosRequests";
import {UserInterface} from "@/components/interface";

interface UserState {
  users : UserInterface[],
  status : "idle" | "loading" | "succeeded" | "failed",
  error : string | null
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
  const protectedRoute = AxiosRequests();
  const url = '/admin/showUsers/';
  try {
    const response = await protectedRoute.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
  console.error("Error occurred while fetching the users at userSlice.ts", error);
  }
});


const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "loading";
      state.users = action.payload;
    }) 
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message as string;
    })
  },
});

export const usersReducer = UsersSlice.reducer;