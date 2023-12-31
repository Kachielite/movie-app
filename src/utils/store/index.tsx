import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./slides/selection";
import movieReducer from "./slides/movie";

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["movie/trailer/fulfilled"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.headers"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
