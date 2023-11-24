import { createFeatureSelector } from '@ngrx/store';

export const selectswitchToConversation =
  createFeatureSelector<Boolean>('clickContact');
