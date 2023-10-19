import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TestInfoState } from "../states/test.state";

export const appInfoSelector = createFeatureSelector<TestInfoState>('appInfo');