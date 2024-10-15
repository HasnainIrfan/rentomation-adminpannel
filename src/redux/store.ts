import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from './slice/userSlice';
import { loginSlice } from './slice/loginSlice';
import { blogsSlice } from './slice/blogSlice';
import { serviceSlice } from './slice/serviceSlice';
import { reservationSlice } from './slice/reservationSlice';

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [loginSlice.reducerPath]: loginSlice.reducer,
    [blogsSlice.reducerPath]: blogsSlice.reducer,
    [serviceSlice.reducerPath]: serviceSlice.reducer,
    [reservationSlice.reducerPath]: reservationSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([
      userSlice.middleware,
      loginSlice.middleware,
      blogsSlice.middleware,
      serviceSlice.middleware,
      reservationSlice.middleware,
    ]),
});

setupListeners(store.dispatch);

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
