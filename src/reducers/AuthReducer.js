import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from "../actions/types";

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_ERROR:
      return { ...initialState, error: action.payload.message };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
