import { createSlice } from "@reduxjs/toolkit";

export const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    note: [{ title: "", date: Date.now(), noteText: "" }],
  },

  reducers: {
    addNote: (state, action) => {
      state.note = [...state.note, action.payload];
    },
    deleteNote: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote } = NotesSlice.actions;

export default NotesSlice.reducer;
