import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentActiveGroup: null,
  groups: [
    {
      id: 1,
      groupName: "My Group",
      groupShortName: "MG",
      groupColor: "#B38BFA",
      notes: [
        { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
        { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
      ],
    },
    {
      id: 2,
      groupName: "CSS",
      groupShortName: "C",
      groupColor: "#43E6FC",
      notes: [
        { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
        { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
      ],
    },
    {
      id: 3,
      groupName: "JS",
      groupShortName: "J",
      groupColor: "#6691FF",
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
    changeCurrentActiveGroup: (state, action) => {
      state.currentActiveGroup = action.payload;
    },
    createNote: (state, action) => {},
  },
});

export const { createNote, changeCurrentActiveGroup } = noteSlice.actions;

export default noteSlice.reducer;
