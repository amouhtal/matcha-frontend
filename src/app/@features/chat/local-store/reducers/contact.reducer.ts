import { createReducer } from "@ngrx/store";
import { ContactDTO } from "../../components/contact-panel/models/contact.dto";




const contactsIntialState: ContactDTO[] = [
]
        



export const contactsReducer = createReducer(
    contactsIntialState,
    
)