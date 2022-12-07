import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { Titel: "Card Titel", Content: "Content Place Holder" },
  { Titel: "Card Titel 2", Content: "Content Place Holder 2" },
];

export const Post = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    AddPost: (state, action) => {
      state.push({
        Titel: action.payload.title,
        Content: action.payload.Content,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddPost } = Post.actions;
export default Post.reducer;
