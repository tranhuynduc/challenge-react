import { UPDATE_TOTAL_DONATE, UPDATE_MESSAGE } from './constants'

const initialState = {
  donate: 0,
  message: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL_DONATE:
      return {
        ...state,
        donate: state.donate + action.amount,
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }

    default:
      return state;
  }
}

export default rootReducer;
