import { formatText } from '@/utils/formatText';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { getApiResponse } from '@/utils/getApiResponse.ts';

export const onSent = createAsyncThunk(
  'chat/onSent',
  async (prompt: string, { getState, dispatch }): Promise<string> => {
    const { inputValue, previousPrompts } = (getState() as RootState).chat;
    const response: string = await getApiResponse(prompt, inputValue, previousPrompts, dispatch);
    return formatText(response);
  },
);