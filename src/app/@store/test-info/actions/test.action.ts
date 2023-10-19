import { createAction, props } from "@ngrx/store";


export const publishTestInfo = createAction('[AppInfo] publish TestInfo' ,
 props< {payload: string}>());
