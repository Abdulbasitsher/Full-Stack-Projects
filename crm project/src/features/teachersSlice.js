import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: [],
  reducers: {
    addTeacher: (state, action) => {
      state.push({
        ...action.payload,
        notes: action.payload.notes || [],
        nextFollowUp: action.payload.nextFollowUp || null,
      });
    },
    removeTeacher: (state, action) => {
      return state.filter((teacher) => teacher.id !== action.payload);
    },
    addNoteToTeacher: (state, action) => {
      const teacher = state.find((t) => t.id === action.payload.id);
      if (teacher) {
        teacher.notes.push({
          text: action.payload.note,
          date: new Date().toISOString(),
        });
      }
    },
    updateFollowUpTeacher: (state, action) => {
      const teacher = state.find((t) => t.id === action.payload.id);
      if (teacher) {
        teacher.nextFollowUp = action.payload.date;
      }
    },
  },
});

export const {
  addTeacher,
  removeTeacher,
  addNoteToTeacher,
  updateFollowUpTeacher,
} = teachersSlice.actions;

export default teachersSlice.reducer;
