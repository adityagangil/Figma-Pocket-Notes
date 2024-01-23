import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentActiveGroup: null,
  groups: [
    // {
    //   id: 1,
    //   groupName: "My Group",
    //   groupShortName: "MG",
    //   groupColor: "#B38BFA",
    //   notes: [
    //     { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
    //     { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
    //   ],
    // },
    // {
    //   id: 2,
    //   groupName: "CSS",
    //   groupShortName: "C",
    //   groupColor: "#43E6FC",
    //   notes: [
    //     { id: 1, content: "Lorem ipsum", date: "9 Mar 2023", time: "10:10 AM" },
    //     { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
    //   ],
    // },
    // {
    //   id: 3,
    //   groupName: "JS",
    //   groupShortName: "J",
    //   groupColor: "#6691FF",
    //   notes: [
    //     { id: 1, content: "Lorem ipsum", date: "2 Mar 2023", time: "10:10 AM" },
    //     { id: 2, content: "Ipsum lorem", date: "3 Mar 2023", time: "1:10 AM" },
    //     { id: 3, content: "Ipsum lorem", date: "4 Mar 2023", time: "1:10 AM" },
    //   ],
    // },
    // {
    //   id: 4,
    //   groupName: "Latest grp",
    //   groupShortName: "LG",
    //   groupColor: "#6691FF",
    //   notes: [],
    // },
  ],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    changeCurrentActiveGroup: (state, action) => {
      state.currentActiveGroup = action.payload;
    },

    createGroup: (state, action) => {
      const { groupName, groupColor } = action.payload;

      const shortName = groupName
        .split(" ")
        .reduce((response, word) => response + word.slice(0, 1), "")
        .toUpperCase();

      const newGroup = state.groups;
      newGroup.push({
        id: new Date(),
        groupName,
        groupShortName: shortName,
        groupColor,
        notes: [],
      });
    },
  },
});

export const { changeCurrentActiveGroup, createGroup } = noteSlice.actions;

export default noteSlice.reducer;
