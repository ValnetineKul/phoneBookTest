import * as TYPES from '../Type';

const initState = {
  phoneBookContacts: [
  ]
};
const phoneBookReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SUBMIT_CONTACT_INFO : {
      return {
        ...state,
        phoneBookContacts: [...state.phoneBookContacts, action.payload],
      }
    }
    default : {
      return state
    }
  }
};
export default phoneBookReducer;