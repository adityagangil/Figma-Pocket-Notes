import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      groupName: "HTML",
      notes: [
        { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
        { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
      ],
    },
    {
      id: 2,
      groupName: "CSS",
      notes: [
        { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
        { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
      ],
    },
    {
      id: 3,
      groupName: "JS",
      notes: [
        { id: 1, content: "Lorem ipsum", date: "2 Mar 2023", time: "10:10 AM" },
        { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
        { id: 3, content: "Ipsum lorem", date: "4 Mar 2023", time: "1:10 AM" },
      ],
    },
  ],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    createNote: (state, action) => {},
  },
});

export const { createNote } = noteSlice.actions;

export default noteSlice.reducer;
