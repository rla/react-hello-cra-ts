export const SET_COUNT = 'SET_COUNT';
export const INCREASE_COUNT = 'INCREASE_COUNT';

export type SetCountAction = {
  type: typeof SET_COUNT;
  value: number;
};

export type IncreaseCountAction = {
  type: typeof INCREASE_COUNT;
};

export type CountAction = SetCountAction | IncreaseCountAction;

export const setCount = (value: number): SetCountAction =>
  ({ type: SET_COUNT, value });

export const increaseCount = (): IncreaseCountAction =>
  ({ type: INCREASE_COUNT });
