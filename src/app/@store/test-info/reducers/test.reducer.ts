import { createReducer, on } from "@ngrx/store";
import { publishTestInfo } from "../actions/test.action";
import { TestInfoState } from "../states/test.state";

export const initTestInfoState : TestInfoState  = {

}

export const appInfoReducer = createReducer(
    initTestInfoState,
    on(publishTestInfo , (state, action) =>  action.payload),
);
