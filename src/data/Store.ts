import { configureStore } from '@reduxjs/toolkit';
import { requestsReducer } from './slices/RequestSlice';
import { pagesReducer } from './slices/PagesSlice';
import { environmentReducer } from './slices/EnvironmentSlice';
import { responseReducer } from './slices/ResponseSlice';

export const Store = configureStore({
	reducer: {
		requests: requestsReducer,
		response: responseReducer,
		pagination: pagesReducer,
		environment: environmentReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
