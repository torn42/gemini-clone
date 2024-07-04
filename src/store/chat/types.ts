export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ChatState {
  inputValue: string;
  recentPrompt: string;
  previousPrompts: string[];
  showResult: boolean;
  resultData: string;
  status: Status;
}