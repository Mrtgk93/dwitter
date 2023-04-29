import { SET_USER, SET_TOKEN, SET_ALL_ENTRIES, ADD_ENTRY } from "./actions";

const initialState = {
  user: null,
  allEntries: [],
  token: null,
};

export function alfred(state = initialState, action) {
  //{type:"SET_USER",payload:userObj}
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_ALL_ENTRIES:
      return {
        ...state,
        allEntries: action.payload,
      };
    case ADD_ENTRY:
      return {
        ...state,
        allEntries: [...state.allEntries, action.payload],
      };

    default:
      return state;
  }
}
