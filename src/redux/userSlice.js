import {
  combineReducers,
  createAsyncThunk,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { client } from '../helpers';

const getSessionId = () => {
  return localStorage.getItem('session_id');
};

export const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
  const session_id = getSessionId();
  const response = await client.get(`account?session_id=${session_id}`);
  return response.data;
});

const initialState = {
  loading: false,
  user: [],
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = '';
      })

      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
