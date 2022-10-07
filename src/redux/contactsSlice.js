import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    add(state, action) {
      const findName = state.contacts.find(
        el => el.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      findName
        ? alert(`${state.contacts.name} is already in contacts`)
        : state.contacts.push(action.payload);
    },
    del(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterAdd(state, action) {
      // console.log("state", state, action)
      state.filter = action.payload;
    },
  },
});

// console.log(contactsSlice);

export const { add, del, filterAdd } = contactsSlice.actions;
