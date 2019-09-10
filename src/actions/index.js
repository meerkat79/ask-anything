import { FORM_SUBMISSION } from "./actionTypes";

export const submitForm = (form) => {
    return {
        type: FORM_SUBMISSION,
        payload: form
    };
}
