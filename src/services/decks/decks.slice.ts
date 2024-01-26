
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  itemsPerPage: 10,
  currentPage: 1,
  searchByName: '',
  newDeckName: '',
}

export const decksSlice = createSlice({
  initialState,

  name: 'decksSlice',
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    setNewDeckName: (state, action: PayloadAction<string>) => {
      state.newDeckName = action.payload
    }
  }
})

export const selectDecksSlice = (state: RootState) => state.decksSlice
// export const {setItemsPerPage, setCurrentPage, setSearchByName} = decksSlice.actions