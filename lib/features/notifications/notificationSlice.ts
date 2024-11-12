import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequests } from "@/components/utils/axiosRequests";
import { NotificationInterface } from "@/components/interface";

const initialState = {
  notifications: <NotificationInterface[]>[],
  status: 'idle',
  error: "",
}

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async() => {
  const protectedRoute = AxiosRequests();
  const url = '/users/showNotifications';
  const response = await protectedRoute.get(url);
  if (response.status === 200) {
    return response.data;
  }
})

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.status = 'successed'
      const notifications  = action.payload.notifications
      if (notifications && notifications.length > 0) {
        const sortedNotifications = notifications.sort((a: NotificationInterface, b: NotificationInterface) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        state.notifications = sortedNotifications;
      } else {
        state.notifications = [];
      }
    })
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message as string;
      console.log('Failed to fetch notifications')
    })
  }
});

export const notificationReducer = NotificationsSlice.reducer;