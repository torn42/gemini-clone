import { ChatState, Status } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onSent } from './asyncActions';

const initialState: ChatState = {
  inputValue: '',
  recentPrompt: '',
  previousPrompts: JSON.parse(localStorage.getItem('previousPrompts') || '[]'),
  showResult: false,
  resultData: '',
  status: Status.LOADING,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setRecentPrompt: (state, action: PayloadAction<string>) => {
      state.recentPrompt = action.payload;
    },
    setPreviousPrompts: (state, action: PayloadAction<string[]>) => {
      state.previousPrompts = action.payload;
      localStorage.setItem('previousPrompts', JSON.stringify(state.previousPrompts));
    },
    newChat: (state) => {
      state.status = Status.LOADING;
      state.showResult = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSent.pending, (state) => {
        state.status = Status.LOADING;
        state.resultData = '';
        state.showResult = true;
        if (state.inputValue.trim()) {
          state.recentPrompt = state.inputValue;
          state.previousPrompts = [...state.previousPrompts, state.inputValue];
          localStorage.setItem('previousPrompts', JSON.stringify(state.previousPrompts));
        }
        state.inputValue = '';
      })
      .addCase(onSent.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = Status.SUCCESS;
        state.resultData = action.payload;
      })
      .addCase(onSent.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const {
  setInputValue,
  setRecentPrompt,
  setPreviousPrompts,
  newChat,
} = chatSlice.actions;

export default chatSlice.reducer;