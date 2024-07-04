import run from '@/config/gemini';
import { setPreviousPrompts, setRecentPrompt } from '@/store/chat/slice';
import { Dispatch } from '@reduxjs/toolkit';

// this function receives the gemini response and performs
// the logic for checking past prompts

export const getApiResponse = async (
  prompt: string,
  inputValue: string,
  previousPrompts: string[],
  dispatch: Dispatch,
): Promise<string> => {
  let response: string;
  if (prompt !== undefined) {
    // using gemini API func
    response = await run(prompt);
    dispatch(setRecentPrompt(prompt));
  } else if (inputValue.trim()) {
    dispatch(setPreviousPrompts([...previousPrompts, prompt]));
    dispatch(setRecentPrompt(prompt));
    response = await run(prompt);
  } else {
    throw new Error('Input value is empty');
  }

  return response;
};