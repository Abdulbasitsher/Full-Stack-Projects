import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      // Expect { id, name, notes, nextFollowUp }
      state.push({
        ...action.payload,
        notes: action.payload.notes || [],
        nextFollowUp: action.payload.nextFollowUp || null,
      });
    },
    removeStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
    addNoteToStudent: (state, action) => {
      // Expect { id, note }
      const student = state.find((s) => s.id === action.payload.id);
      if (student) {
        student.notes.push({
          text: action.payload.note,
          date: new Date().toISOString(),
        });
      }
    },
    updateFollowUp: (state, action) => {
      // Expect { id, date }
      const student = state.find((s) => s.id === action.payload.id);
      if (student) {
        student.nextFollowUp = action.payload.date;
      }
    },
  },
});

export const {
  addStudent,
  removeStudent,
  addNoteToStudent,
  updateFollowUp,
} = studentsSlice.actions;

export default studentsSlice.reducer;
