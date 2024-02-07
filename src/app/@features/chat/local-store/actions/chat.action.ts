import { createAction } from '@ngrx/store';

export const switchToConversation = createAction(
  '[Chat] Switch to Conversation'
);
export const selectChat = createAction('[Chat] Select Contact');
