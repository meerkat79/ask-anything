import { combineReducers } from 'redux';

const formReducer = (state = { name: '', surname: '', email: '', question: '' }, action) => {
    switch (action.type) {
        case 'FORM_SUBMISSION':
          return [
            ...state,
            action.payload
          ]
        default:
          return state
      }
};

export default combineReducers({ forms: formReducer });
