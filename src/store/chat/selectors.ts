import { RootState } from '..';

export const chatSelector = (state: RootState) => state.chat;
export const previousPromptsSelector = (state: RootState) => state.chat.previousPrompts;
export const inputValueSelector = (state: RootState) => state.chat.inputValue;
export const resultSelector = (state: RootState) => state.chat.showResult;