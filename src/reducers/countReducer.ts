import { CountAction, SET_COUNT, INCREASE_COUNT } from '../actions/count';

export type CountState = {
  count: number;
};

export const initialCountState: CountState = {
  count: 0
};

type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

export const countReducer = (
    state: DeepReadonly<CountState> = initialCountState,
    action: CountAction
  ) => {
  switch (action.type) {
    case SET_COUNT:
      // state.count = 2;
      return { ...state, count: action.value };
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
