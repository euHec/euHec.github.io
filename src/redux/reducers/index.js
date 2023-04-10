import { combineReducers } from "redux";
import { CONTROL_SIDEBAR, INITIAL_SIDEBAR } from "../actions";

const INITIAL_STATE = {
  clicked: false,
}

const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTROL_SIDEBAR: {
      return {
        ...state,
        clicked: action.payload.state
      }
    }
    case INITIAL_SIDEBAR: {
      return {
        ...state,
      }
    }
    default: return state;
  }
}

const rootReducer = combineReducers({ clickReducer })

export default rootReducer