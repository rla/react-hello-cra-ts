import { CountAction, SET_COUNT, INCREASE_COUNT } from '../actions/count';

export type CountState = {
  count: number;
};

export const initialCountState: CountState = {
  count: 0
};

export const countReducer = (
    state = initialCountState,
    action: CountAction
  ) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.value };
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
